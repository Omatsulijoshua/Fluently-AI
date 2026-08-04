import { Injectable, BadRequestException } from '@nestjs/common';

export interface CreateCheckoutSessionDto {
  userId: string;
  planId: 'PRO_MONTHLY' | 'PRO_ANNUAL' | 'FAMILY_MONTHLY' | 'ENTERPRISE';
  gateway: 'STRIPE' | 'PAYPAL' | 'FLUTTERWAVE' | 'PAYSTACK';
  couponCode?: string;
}

@Injectable()
export class PaymentsService {
  private validCoupons: Record<string, number> = {
    FLUENTLY2026: 20, // 20% discount
    LAUNCH50: 50,     // 50% discount
  };

  async createCheckoutSession(dto: CreateCheckoutSessionDto) {
    const basePrice = dto.planId === 'PRO_ANNUAL' ? 149.99 : 14.99;
    let discountPercent = 0;

    if (dto.couponCode) {
      discountPercent = this.validCoupons[dto.couponCode.toUpperCase()] || 0;
      if (!discountPercent) {
        throw new BadRequestException('Invalid or expired coupon code');
      }
    }

    const finalAmount = Math.round(basePrice * (1 - discountPercent / 100) * 100) / 100;
    const checkoutId = `chk_${Math.random().toString(36).substring(7)}`;

    return {
      checkoutId,
      userId: dto.userId,
      planId: dto.planId,
      gateway: dto.gateway,
      basePrice,
      discountPercent,
      finalAmount,
      redirectUrl: `https://checkout.stripe.com/pay/${checkoutId}`,
    };
  }

  async getSubscriptionStatus(userId: string) {
    return {
      userId,
      plan: 'PRO_UNLIMITED',
      status: 'ACTIVE',
      renewsAt: new Date(Date.now() + 30 * 86400 * 1000).toISOString(),
      gateway: 'STRIPE',
    };
  }
}
