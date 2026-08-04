import { Controller, Post, Body, Headers } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Payments Webhook Listener')
@Controller('api/v1/payments/webhooks')
export class WebhooksController {
  @Post('stripe')
  @ApiOperation({ summary: 'Stripe signature webhook event reconciliation listener' })
  @ApiResponse({ status: 200, description: 'Webhook event processed successfully' })
  handleStripeWebhook(@Headers('stripe-signature') signature: string, @Body() body: any) {
    const eventType = body.type || 'payment_intent.succeeded';

    return {
      received: true,
      eventType,
      timestamp: new Date().toISOString(),
    };
  }
}
