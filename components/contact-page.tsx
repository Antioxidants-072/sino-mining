import Image from 'next/image'
import { Mail, MapPin, Phone, PhoneCall, Printer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import type { ContactPageContent } from '@/lib/content'

export function ContactPage({ content }: { content: ContactPageContent }) {
  return (
    <div>
      <section className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="relative h-[280px] w-full overflow-hidden sm:h-[360px]">
          <Image
            src={content.heroImage}
            alt={content.heroAlt}
            fill
            priority
            className="object-cover"
          />
          <div className="cut-tl-lg absolute bottom-0 right-0 w-full max-w-xl bg-secondary p-8 text-secondary-foreground sm:p-10">
            <h1 className="font-heading text-3xl font-bold sm:text-4xl">
              {content.heading}
            </h1>
            <p className="mt-3 text-pretty leading-relaxed text-secondary-foreground/80">
              {content.subtitle}
            </p>
            <div className="mt-6 flex items-center gap-2 text-highlight">
              <PhoneCall className="size-4" aria-hidden="true" />
              <span className="text-sm text-secondary-foreground/60">
                {content.hotlineLabel}
              </span>
              <a
                href={`tel:${content.hotline.replace(/[^\d+]/g, '')}`}
                className="font-heading text-lg font-bold tracking-wide text-highlight"
              >
                {content.hotline}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <form className="flex flex-col gap-6 border border-border p-8 sm:p-10">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {content.formHeading}
            </h2>
            <FieldGroup className="grid gap-6 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="contact-name">
                  {content.formNameLabel}
                </FieldLabel>
                <Input id="contact-name" name="name" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="contact-company">
                  {content.formCompanyLabel}
                </FieldLabel>
                <Input id="contact-company" name="company" />
              </Field>
              <Field>
                <FieldLabel htmlFor="contact-email">
                  {content.formEmailLabel}
                </FieldLabel>
                <Input id="contact-email" name="email" type="email" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="contact-phone">
                  {content.formPhoneLabel}
                </FieldLabel>
                <Input id="contact-phone" name="phone" type="tel" />
              </Field>
              <Field className="sm:col-span-2">
                <FieldLabel htmlFor="contact-message">
                  {content.formMessageLabel}
                </FieldLabel>
                <Textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder={content.formMessagePlaceholder}
                  required
                />
              </Field>
            </FieldGroup>
            <Button
              type="submit"
              className="cta-swap w-fit self-start rounded-none px-8"
            >
              {content.formSubmitLabel}
            </Button>
          </form>

          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {content.officesHeading}
            </h2>
            <div className="mt-6 flex flex-col gap-6">
              {content.offices.map((office) => (
                <div
                  key={office.region}
                  className="border border-border p-6"
                >
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {office.region}
                  </h3>
                  <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <MapPin
                        className="mt-0.5 size-4 flex-shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span className="text-pretty leading-relaxed">
                        {office.address}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone
                        className="mt-0.5 size-4 flex-shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <div className="flex flex-col gap-0.5">
                        <a
                          href={`tel:${office.phone.replace(/[^\d+]/g, '')}`}
                          className="transition-colors hover:text-foreground"
                        >
                          {office.phone}
                        </a>
                        {office.landline ? (
                          <a
                            href={`tel:${office.landline.replace(/[^\d+]/g, '')}`}
                            className="transition-colors hover:text-foreground"
                          >
                            {office.landline}
                          </a>
                        ) : null}
                      </div>
                    </div>
                    {office.fax ? (
                      <div className="flex items-center gap-3">
                        <Printer
                          className="size-4 flex-shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        <span>{office.fax}</span>
                      </div>
                    ) : null}
                    <div className="flex items-center gap-3">
                      <Mail
                        className="size-4 flex-shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <a
                        href={`mailto:${office.email}`}
                        className="transition-colors hover:text-foreground"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-14 lg:px-10">
        <div className="relative h-[400px] w-full overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211849.6134562134!2d116.56413563974681!3d33.93726451649895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35cf14cbde2aaea9%3A0x4d77e236705a093d!2z5Lit6IO955-_5py6!5e0!3m2!1szh-CN!2suk!4v1787727075912!5m2!1szh-CN!2suk"
            className="absolute inset-0 h-full w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Office location"
          />
        </div>
      </section>
    </div>
  )
}
