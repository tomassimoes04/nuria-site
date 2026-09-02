export const languages = { en: 'EN', pt: 'PT' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** Path to the same page in the other language. */
export const altPath: Record<Lang, string> = {
  en: '/work-with-me',
  pt: '/pt/work-with-me'
};

export const ui = {
  en: {
    'meta.title': 'Núria Chaves | UGC & short-form video creator',
    'meta.description':
      'UGC and short-form video for brands. Reels, packages and past work — hooks first, always.',
    'nav.journal': "núria's little journal",
    'intro.hint': 'scroll to open the page…',
    'strip.title': 'the reels',
    'strip.cta': 'tap one for the rate card →',
    'reel.open': 'open rate card',
    'rates.title': 'the packages',
    'overlay.label': 'rate card',
    'overlay.close': 'Close rate card',
    'overlay.package': 'package',
    'overlay.quote': 'quoted per project',
    'overlay.quoteHint': 'add it and tell me about the brief',
    'overlay.placeholder': '[ reel plays\nwith sound ]',
    'overlay.soundOn': 'sound on ♪',
    'cta.add': 'add to proposal',
    'cta.added': 'added ✓',
    'tray.label': 'proposal tray —',
    'tray.review': 'review →',
    'social.mostActive': 'most active',
    'form.name': 'your name',
    'form.email': 'email',
    'form.brand': 'product / brand',
    'form.send': 'send it →',
    'form.subject': 'Collab enquiry',
    'lang.switch': 'Ver em português'
  },
  pt: {
    'meta.title': 'Núria Chaves | Criadora de UGC e vídeo curto',
    'meta.description':
      'UGC e vídeo curto para marcas. Reels, pacotes e trabalhos anteriores — primeiro o gancho, sempre.',
    'nav.journal': "o diário da núria",
    'intro.hint': 'faz scroll para abrir a página…',
    'strip.title': 'os reels',
    'strip.cta': 'toca num para ver o cartão de preços →',
    'reel.open': 'abrir cartão de preços',
    'rates.title': 'os pacotes',
    'overlay.label': 'cartão de preços',
    'overlay.close': 'Fechar cartão de preços',
    'overlay.package': 'pacote',
    'overlay.quote': 'orçamento por projecto',
    'overlay.quoteHint': 'adiciona e conta-me o briefing',
    'overlay.placeholder': '[ o reel toca\ncom som ]',
    'overlay.soundOn': 'som ligado ♪',
    'cta.add': 'adicionar à proposta',
    'cta.added': 'adicionado ✓',
    'tray.label': 'proposta —',
    'tray.review': 'rever →',
    'social.mostActive': 'mais activa',
    'form.name': 'o teu nome',
    'form.email': 'email',
    'form.brand': 'produto / marca',
    'form.send': 'enviar →',
    'form.subject': 'Pedido de colaboração',
    'lang.switch': 'View in English'
  }
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['en']): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
