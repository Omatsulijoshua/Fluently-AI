import { PrismaClient, CEFRStage, ConversationTone } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Fluently AI initial database contents...');

  // 1. Seed Global Tier 1 Languages
  const english = await prisma.language.upsert({
    where: { code: 'en-US' },
    update: {},
    create: {
      code: 'en-US',
      name: 'English (United States)',
      nativeName: 'English',
      flagEmoji: '🇺🇸',
      script: 'Latin',
    },
  });

  const spanish = await prisma.language.upsert({
    where: { code: 'es-ES' },
    update: {},
    create: {
      code: 'es-ES',
      name: 'Spanish (Spain)',
      nativeName: 'Español',
      flagEmoji: '🇪🇸',
      script: 'Latin',
    },
  });

  const french = await prisma.language.upsert({
    where: { code: 'fr-FR' },
    update: {},
    create: {
      code: 'fr-FR',
      name: 'French (France)',
      nativeName: 'Français',
      flagEmoji: '🇫🇷',
      script: 'Latin',
    },
  });

  const japanese = await prisma.language.upsert({
    where: { code: 'ja-JP' },
    update: {},
    create: {
      code: 'ja-JP',
      name: 'Japanese',
      nativeName: '日本語',
      flagEmoji: '🇯🇵',
      script: 'Kanji / Hiragana / Katakana',
    },
  });

  // 2. Seed Phonemes for English
  await prisma.phoneme.createMany({
    data: [
      { languageId: english.id, symbol: 'θ', description: 'Voiceless dental fricative (e.g. "think")' },
      { languageId: english.id, symbol: 'ð', description: 'Voiced dental fricative (e.g. "this")' },
      { languageId: english.id, symbol: 'æ', description: 'Near-open front unrounded vowel (e.g. "cat")' },
    ],
    skipDuplicates: true,
  });

  // 3. Seed AI Tutor Personas
  await prisma.aITutorPersona.createMany({
    data: [
      {
        languageId: english.id,
        name: 'Sophia - Native Peer',
        defaultTone: ConversationTone.FRIENDLY_PEER,
        systemPrompt: 'You are Sophia, an encouraging native English speaker helping learners master natural conversational phrases.',
        voiceModelId: 'en-US-sophia-v1',
      },
      {
        languageId: spanish.id,
        name: 'Mateo - Executive Coach',
        defaultTone: ConversationTone.EXECUTIVE_COACH,
        systemPrompt: 'You are Mateo, a professional Spanish executive coach refining formal business communication and grammar precision.',
        voiceModelId: 'es-ES-mateo-v1',
      },
    ],
    skipDuplicates: true,
  });

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
