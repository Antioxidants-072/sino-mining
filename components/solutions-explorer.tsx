'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { ArrowUpRight, FlaskConical, Gem, Mountain, Waves } from 'lucide-react'
import { cn } from '@/lib/utils'
import { solutionDescriptions } from '@/lib/solutions-content'

const solutions = [
  { id: 'antimony', zh: '锑矿', en: 'Antimony', es: 'Antimonio', ru: 'Сурьма', image: '/images/solutions/antimony.jpg', stages: ['破碎与筛分', '跳汰重选', '磨矿分级', '浮选精选'], stagesEn: ['Crushing & screening', 'Gravity separation', 'Grinding & classification', 'Flotation cleaning'], stagesEs: ['Trituracion y tamizado', 'Separacion gravitacional', 'Molienda y clasificacion', 'Limpieza por flotacion'], stagesRu: ['Дробление и грохочение', 'Отсадка', 'Измельчение и классификация', 'Флотационная очистка'] },
  { id: 'gold', zh: '金矿', en: 'Gold', es: 'Oro', ru: 'Золото', image: '/images/solutions/gold.jpg', stages: ['破碎与磨矿', '重选浓缩', '氰化浸出', '炭浆吸附与冶炼'], stagesEn: ['Crushing & grinding', 'Gravity concentration', 'Cyanide leaching', 'CIP adsorption & smelting'], stagesEs: ['Trituracion y molienda', 'Concentracion gravitacional', 'Lixiviacion por cianuro', 'Adsorcion CIP y fundicion'], stagesRu: ['Дробление и измельчение', 'Гравитационное обогащение', 'Цианидное выщелачивание', 'CIP адсорбция и плавка'] },
  { id: 'manganese-iron', zh: '锰铁分离', en: 'Manganese–Iron', es: 'Manganeso-Hierro', ru: 'Марганец-Железо', image: '/images/solutions/manganese-iron.jpg', stages: ['两段破碎', '焙烧还原', '冷却与磨矿', '磁选分离'], stagesEn: ['Two-stage crushing', 'Rotary kiln reduction', 'Cooling & grinding', 'Magnetic separation'], stagesEs: ['Trituracion de dos etapas', 'Reduccion en horno rotativo', 'Enfriamiento y molienda', 'Separacion magnetica'], stagesRu: ['Двухстадиальное дробление', 'Восстановительный обжиг в печи', 'Охлаждение и измельчение', 'Магнитная сепарация'] },
  { id: 'manganese', zh: '锰矿', en: 'Manganese', es: 'Manganeso', ru: 'Марганец', image: '/images/solutions/manganese.jpg', stages: ['破碎与磨矿', '物理分选', '焙烧浸出', '沉淀与电解'], stagesEn: ['Crushing & grinding', 'Physical separation', 'Roasting & leaching', 'Precipitation & electrowinning'], stagesEs: ['Trituracion y molienda', 'Separacion fisica', 'Tostacion y lixiviacion', 'Precipitacion y electroobtencion'], stagesRu: ['Дробление и измельчение', 'Физическое обогащение', 'Обжиг и выщелачивание', 'Осаждение и электроосаждение'] },
  { id: 'bauxite', zh: '铝土矿', en: 'Bauxite', es: 'Bauxita', ru: 'Боксит', image: '/images/solutions/bauxite.jpg', stages: ['磨矿', '分级', '调浆', '浮选精选'], stagesEn: ['Grinding', 'Classification', 'Pulp conditioning', 'Flotation cleaning'], stagesEs: ['Molienda', 'Clasificacion', 'Acondicionamiento de pulpa', 'Limpieza por flotacion'], stagesRu: ['Измельчение', 'Классификация', 'Кондиционирование пульпы', 'Флотационная очистка'] },
  { id: 'silica', zh: '硅石', en: 'Silica', es: 'Silice', ru: 'Кварц', image: '/images/solutions/silica.jpg', stages: ['擦洗脱泥', '水力分级', '调浆', '石英反浮选'], stagesEn: ['Scrubbing & desliming', 'Hydroclassification', 'Pulp preparation', 'Silica flotation'], stagesEs: ['Lavado y deslamificacion', 'Hidroclasificacion', 'Preparacion de pulpa', 'Flotacion de silice'], stagesRu: ['Скрабинг и обесшламливание', 'Гидроклассификация', 'Приготовление пульпы', 'Флотация кварца'] },
  { id: 'ilmenite', zh: '钛铁矿', en: 'Ilmenite', es: 'Ilmenita', ru: 'Ильменит', image: '/images/solutions/ilmenite.jpg', stages: ['破碎分级', '重选预富集', '磁选', '钛铁矿精选'], stagesEn: ['Crushing & classification', 'Gravity pre-concentration', 'Magnetic separation', 'Ilmenite cleaning'], stagesEs: ['Trituracion y clasificacion', 'Pre-concentracion gravitacional', 'Separacion magnetica', 'Limpieza de ilmenita'], stagesRu: ['Дробление и классификация', 'Гравитационное предобогащение', 'Магнитная сепарация', 'Очистка ильменита'] },
  { id: 'copper', zh: '铜矿', en: 'Copper', es: 'Cobre', ru: 'Медь', image: '/images/solutions/copper.jpg', stages: ['破碎磨矿', '分级', '粗选', '精选与扫选'], stagesEn: ['Crushing & grinding', 'Classification', 'Rougher flotation', 'Cleaning & scavenging'], stagesEs: ['Trituracion y molienda', 'Clasificacion', 'Flotacion rougher', 'Limpieza y depuracion'], stagesRu: ['Дробление и измельчение', 'Классификация', 'Флотациячерновой', 'Очистка и перечистка'] },
  { id: 'alluvial-tin', zh: '砂锡矿', en: 'Alluvial Tin', es: 'Estano aluvial', ru: 'Россыпное олово', image: '/images/solutions/alluvial-tin.jpg', stages: ['筛分', '擦洗与滚筒筛', '跳汰', '摇床精选'], stagesEn: ['Screening', 'Scrubbing & trommel', 'Jigging', 'Shaking table cleaning'], stagesEs: ['Tamizado', 'Lavado y trommel', 'Jigging', 'Limpieza en mesa vibratoria'], stagesRu: ['Грохочение', 'Скрабинг и барабанный грохот', 'Отсадка', 'Очистка на концентрационных столах'] },
  { id: 'alluvial-gold', zh: '砂金矿', en: 'Alluvial Gold', es: 'Oro aluvial', ru: 'Россыпное золото', image: '/images/solutions/alluvial-gold.jpg', stages: ['解离与分级', '粗选', '重砂精选', '扫选回收'], stagesEn: ['Disintegration & classification', 'Roughing', 'Heavy-sand cleaning', 'Scavenging'], stagesEs: ['Desintegracion y clasificacion', 'Depuracion gruesa', 'Limpieza de arena pesada', 'Depuracion'], stagesRu: ['Дес интеграция и классификация', 'Черновая флотация', 'Очистка тяжёлых песков', 'Перечистка'] },
  { id: 'iron-ore', zh: '铁矿石', en: 'Iron Ore', es: 'Mineral de hierro', ru: 'Железная руда', image: '/images/solutions/iron-ore.jpg', stages: ['两段破碎', '磨矿分级', '弱磁选', '强磁选与重选'], stagesEn: ['Two-stage crushing', 'Grinding & classification', 'Low-intensity magnetic separation', 'High-intensity separation & gravity'], stagesEs: ['Trituracion de dos etapas', 'Molienda y clasificacion', 'Separacion magnetica de baja intensidad', 'Separacion de alta intensidad y gravitacional'], stagesRu: ['Двухстадиальное дробление', 'Измельчение и классификация', 'Слабомагнитная сепарация', 'Сильномагнитная сепарация и гравитация'] },
  { id: 'lead-zinc', zh: '铅锌矿', en: 'Lead–Zinc', es: 'Plomo-Zinc', ru: 'Свинец-Цинк', image: '/images/solutions/lead-zinc.jpg', stages: ['破碎磨矿', '铅浮选', '锌浮选', '精矿脱水'], stagesEn: ['Crushing & grinding', 'Lead flotation', 'Zinc flotation', 'Concentrate dewatering'], stagesEs: ['Trituracion y molienda', 'Flotacion de plomo', 'Flotacion de zinc', 'Espesamiento de concentrado'], stagesRu: ['Дробление и измельчение', 'Флотация свинца', 'Флотация цинка', 'Обезвоживание концентрата'] },
  { id: 'fluorite', zh: '萤石矿', en: 'Fluorite', es: 'Fluorita', ru: 'Флюорит', image: '/images/solutions/fluorite.jpg', stages: ['破碎筛分', '重介质分选', '磨矿调浆', '萤石浮选精选'], stagesEn: ['Crushing & screening', 'Dense medium separation', 'Grinding & conditioning', 'Fluorite flotation cleaning'], stagesEs: ['Trituracion y tamizado', 'Separacion de medio denso', 'Molienda y acondicionamiento', 'Limpieza por flotacion de fluorita'], stagesRu: ['Дробление и грохочение', 'Тяжёлосредная сепарация', 'Измельчение и кондиционирование', 'Флотационная очистка флюорита'] },
]

export function SolutionsExplorer({ lang = 'zh' }: { lang?: 'zh' | 'en' | 'es' | 'ru' }) {
  const [activeId, setActiveId] = useState('antimony')
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const isZh = lang === 'zh'
  const isEn = lang === 'en'
  const isEs = lang === 'es'
  const isRu = lang === 'ru'

  const galleryImages = [
    { src: '/images/gallery/iron-tailings-phosphate.jpg', zh: '铁尾矿选磷生产线', en: 'Iron tailings phosphate recovery line', es: 'Linea de recuperacion de fosfato de relaves de hierro', ru: 'Линия извлечения фосфата из хвостов железа' },
    { src: '/images/gallery/iron-ore-2.jpg', zh: '铁矿选矿厂', en: 'Iron ore processing plant', es: 'Planta de procesamiento de mineral de hierro', ru: 'Обогатительная фабрика железной руды' },
    { src: '/images/gallery/fluorite-2.jpg', zh: '萤石选矿现场', en: 'Fluorite processing plant', es: 'Planta de procesamiento de fluorita', ru: 'Фабрика обогащения флюорита' },
    { src: '/images/gallery/fluorite-1.jpg', zh: '萤石浮选设备', en: 'Fluorite flotation equipment', es: 'Equipo de flotacion de fluorita', ru: 'Флотационное оборудование для флюорита' },
    { src: '/images/gallery/lead-zinc-1.jpg', zh: '铅锌矿浮选设备', en: 'Lead-zinc flotation equipment', es: 'Equipo de flotacion de plomo-zinc', ru: 'Флотационное оборудование свинца и цинка' },
    { src: '/images/gallery/lead-zinc-2.jpg', zh: '铅锌矿生产现场', en: 'Lead-zinc processing plant', es: 'Planta de procesamiento de plomo-zinc', ru: 'Обогатительная фабрика свинца и цинка' },
    { src: '/images/gallery/lead-zinc-3.jpg', zh: '铅锌矿设备细节', en: 'Lead-zinc equipment detail', es: 'Detalle de equipo de plomo-zinc', ru: 'Детали оборудования свинца и цинка' },
    { src: '/images/gallery/graphite-1.jpg', zh: '石墨浮选设备', en: 'Graphite flotation equipment', es: 'Equipo de flotacion de grafito', ru: 'Флотационное оборудование для графита' },
    { src: '/images/gallery/graphite.jpg', zh: '石墨选矿现场', en: 'Graphite processing plant', es: 'Planta de procesamiento de grafito', ru: 'Фабрика обогащения графита' },
    { src: '/videos/graphite-2.mp4', type: 'video' as const, poster: '/images/gallery/graphite.jpg', zh: '石墨选矿视频', en: 'Graphite processing video', es: 'Video de procesamiento de grafito', ru: 'Видео обогащения графита' },
  ]

  const activeGalleryImage = galleryImages[galleryIndex]
  const active = useMemo(() => solutions.find((item) => item.id === activeId) ?? solutions[0], [activeId])

  const name = isZh ? active.zh : isEn ? active.en : isEs ? active.es : active.ru
  const stages = isZh ? active.stages : isEn ? active.stagesEn : isEs ? active.stagesEs : active.stagesRu

  const t = (zh: string, en: string, es: string, ru: string) => isZh ? zh : isEn ? en : isEs ? es : ru

  return (
    <section className="mx-auto flex w-full max-w-[1600px] flex-col gap-10 px-6 pb-24 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-2xl border border-border bg-card p-3 lg:sticky lg:top-28">
          <p className="px-4 pb-3 pt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {t('矿种分类', 'Ore types', 'Tipos de mineral', 'Типы руд')}
          </p>
          <div className="grid grid-cols-2 gap-1 lg:grid-cols-1">
            {solutions.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={cn(
                  'flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors',
                  activeId === item.id ? 'bg-accent text-accent-foreground' : 'text-foreground hover:bg-muted',
                )}
                aria-pressed={activeId === item.id}
              >
                <span>{isZh ? item.zh : isEn ? item.en : isEs ? item.es : item.ru}</span>
                <ArrowUpRight className="size-4 opacity-60" aria-hidden="true" />
              </button>
            ))}
          </div>
        </aside>

        <div className="min-w-0">
          <div className="grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-[0.8fr_1.2fr]">
            <button
              type="button"
              onClick={() => setIsPreviewOpen(true)}
              className="group relative min-h-[360px] cursor-zoom-in bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset lg:min-h-[600px]"
              aria-label={t(`放大查看${name}工艺流程图`, `Enlarge ${name} process flow chart`, `Ampliar diagrama de flujo de ${name}`, `Увеличить схему процесса ${name}`)}
            >
              <Image
                src={active.image}
                alt={t(`${name}工艺流程图`, `${name} process flow chart`, `diagrama de flujo del proceso ${name}`, `схема процесса ${name}`)}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                priority={active.id === 'antimony'}
              />
              <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-foreground/80 px-3 py-1.5 text-xs font-semibold text-background opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {t('点击放大', 'Click to enlarge', 'Clic para ampliar', 'Нажмите для увеличения')}
              </span>
            </button>

            <div className="flex flex-col justify-between gap-8 p-7 lg:p-12">
              <div>
                <div className="flex items-center gap-3 text-accent">
                  <FlaskConical className="size-5" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em]">
                    {t('工艺方案', 'Process solution', 'Solucion de proceso', 'Технологическое решение')}
                  </span>
                </div>
                <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
                  {name}
                </h2>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  {solutionDescriptions[active.id as keyof typeof solutionDescriptions][isZh ? 'zh' : isEn ? 'en' : isEs ? 'es' : 'ru']}
                </p>
              </div>

              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {t('核心流程', 'Core process', 'Proceso central', 'Основной процесс')}
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {stages.map((stage, index) => (
                    <div key={stage} className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-4">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                        {index + 1}
                      </span>
                      <span className="font-semibold text-foreground">{stage}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={isZh ? '/contact' : isEn ? '/en/contact' : isEs ? '/es/contact' : '/ru/contact'}
                className="inline-flex w-fit items-center gap-2 rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                {t('咨询你的矿石方案', 'Discuss your ore', 'Discutir su mineral', 'Обсудить вашу руду')}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5">
              <Mountain className="size-5 text-accent" aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold">
                {t('按矿种定制', 'Ore-specific design', 'Diseno especifico por mineral', 'Проектирование под тип руды')}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <Gem className="size-5 text-accent" aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold">
                {t('围绕回收率优化', 'Recovery-focused', 'Enfocado en recuperacion', 'Фокус на извлечении')}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <Waves className="size-5 text-accent" aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold">
                {t('试验验证流程', 'Pilot-tested routes', 'Rutas probadas piloto', 'Проверенные маршруты')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section
        className="rounded-2xl border border-border bg-card p-5 lg:p-8"
        aria-label={t('设备图片展示', 'Equipment gallery', 'Galeria de equipos', 'Галерея оборудования')}
      >
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
              {t('走进生产现场', 'Inside the plant', 'Dentro de la planta', 'На производстве')}
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-foreground lg:text-3xl">
              {t('设备与工艺现场', 'Equipment in operation', 'Equipos en operacion', 'Оборудование в работе')}
            </h2>
          </div>
          <p className="hidden max-w-sm text-right text-sm leading-relaxed text-muted-foreground sm:block">
            {t('浏览项目现场的代表性设备与选矿工艺场景。', 'Browse representative equipment and processing scenes from our projects.', 'Explore equipos representativos y escenas de procesamiento de nuestros proyectos.', 'Просмотрите образцы оборудования и сцены обогащения из наших проектов.')}
          </p>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
          {activeGalleryImage.type === 'video' ? (
            <video
              src={activeGalleryImage.src}
              poster={activeGalleryImage.poster}
              controls
              playsInline
              preload="metadata"
              className="size-full object-cover"
              aria-label={isZh ? activeGalleryImage.zh : isEn ? activeGalleryImage.en : isEs ? activeGalleryImage.es : activeGalleryImage.ru}
            />
          ) : (
            <Image
              src={activeGalleryImage.src}
              alt={isZh ? activeGalleryImage.zh : isEn ? activeGalleryImage.en : isEs ? activeGalleryImage.es : activeGalleryImage.ru}
              fill
              sizes="(min-width: 1024px) 90vw, 100vw"
              className="object-cover"
            />
          )}
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setGalleryIndex((galleryIndex - 1 + galleryImages.length) % galleryImages.length)}
            className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            aria-label={t('上一张图片', 'Previous image', 'Imagen anterior', 'Предыдущее изображение')}
          >
            ← {t('上一张', 'Previous', 'Anterior', 'Назад')}
          </button>
          <p className="text-sm font-semibold text-muted-foreground">
            {isZh ? activeGalleryImage.zh : isEn ? activeGalleryImage.en : isEs ? activeGalleryImage.es : activeGalleryImage.ru}
            <span className="ml-2 font-mono text-xs">{galleryIndex + 1} / {galleryImages.length}</span>
          </p>
          <button
            type="button"
            onClick={() => setGalleryIndex((galleryIndex + 1) % galleryImages.length)}
            className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            aria-label={t('下一张图片', 'Next image', 'Siguiente imagen', 'Следующее изображение')}
          >
            {t('下一张', 'Next', 'Siguiente', 'Далее')} →
          </button>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[-1, 0, 1].map((offset) => {
            const index = (galleryIndex + offset + galleryImages.length) % galleryImages.length
            const image = galleryImages[index]
            const imageAlt = isZh ? image.zh : isEn ? image.en : isEs ? image.es : image.ru
            return (
              <button
                type="button"
                key={`${image.src}-${offset}`}
                onClick={() => setGalleryIndex(index)}
                className={cn(
                  'overflow-hidden rounded-lg border-2 transition-opacity',
                  galleryIndex === index ? 'border-accent opacity-100' : 'border-transparent opacity-60 hover:opacity-100',
                )}
                aria-label={t(`查看${imageAlt}`, `View ${imageAlt}`, `Ver ${imageAlt}`, `Показать ${imageAlt}`)}
                aria-pressed={galleryIndex === index}
              >
                {image.type === 'video' ? (
                  <Image src={image.poster} alt="" width={280} height={180} className="h-20 w-full object-cover sm:h-28" />
                ) : (
                  <Image src={image.src} alt="" width={280} height={180} className="h-20 w-full object-cover sm:h-28" />
                )}
              </button>
            )
          })}
        </div>
      </section>

      {isPreviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t(`${name}放大工艺流程图`, `${name} enlarged process flow chart`, `Diagrama de flujo ampliado de ${name}`, `Увеличенная схема процесса ${name}`)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-4"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="relative flex max-h-[92vh] max-w-6xl items-center justify-center rounded-2xl bg-background p-3 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.image}
              alt={t(`${name}放大工艺流程图`, `${name} enlarged process flow chart`, `diagrama de flujo ampliado de ${name}`, `увеличенная схема процесса ${name}`)}
              width={1400}
              height={1000}
              className="max-h-[86vh] w-auto max-w-full object-contain"
            />
            <button
              type="button"
              onClick={() => setIsPreviewOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-foreground px-3 py-1.5 text-sm font-bold text-background hover:bg-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={t('关闭预览', 'Close preview', 'Cerrar vista previa', 'Закрыть предпросмотр')}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
