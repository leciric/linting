/** Title, description and Open Graph/Twitter tags for a page, from the current locale's messages. */
export const usePageSeo = (titleKey: string, descriptionKey: string) => {
  const { t } = useI18n()

  useSeoMeta({
    title: () => t(titleKey),
    description: () => t(descriptionKey),
    ogTitle: () => t(titleKey),
    ogDescription: () => t(descriptionKey),
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: () => t(titleKey),
    twitterDescription: () => t(descriptionKey),
  })
}
