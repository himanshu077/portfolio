import contactSuccessImage from '../assets/Images/ContactSuccess.svg';
import Button from './ui/button';
import Icons from './ui/icons';
import Image from './ui/image';
import Input from './ui/input';
import Label from './ui/label';
import Textarea from './ui/textarea';
import { Caption, Heading } from '../components/ui/typography';
import siteConfig from '../config/site';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { contactSubmissionSchema } from '../lib/validations/contact-submission';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSubmissionSchema),
    mode: 'onTouched',
  });

  return isSubmitSuccessful ? (
    <div>
      <Caption>Successful</Caption>
      <Heading>I will be in touch with you</Heading>
      <Image
        metadata={contactSuccessImage}
        alt="A flying paper plane"
      />
    </div>
  ) : (
    <form
      onSubmit={() => {
        void handleSubmit();
      }}
    >
      <fieldset
        disabled={isSubmitting}
        className="group flex flex-col gap-y-6"
      >
        <div>
          <Label htmlFor="contact-form-name">Name</Label>
          <Input
            id="contact-form-name"
            type="text"
            className={errors.name ? 'border-error' : ''}
            {...register('name', { required: true })}
          />
          {errors.name && (
            <p className="mt-2 flex items-center text-sm text-error">
              <Icons.Warning
                aria-hidden
                className="me-2 inline size-5"
              />
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="contact-form-email">Email</Label>
          <Input
            id="contact-form-email"
            type="email"
            className={errors.email ? 'border-error' : ''}
            {...register('email', { required: true })}
          />
          {errors.email && (
            <p className="mt-2 flex items-center text-sm text-error">
              <Icons.Warning
                aria-hidden
                className="me-2 inline size-5"
              />
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="contact-form-message">Message</Label>
          <Textarea
            id="contact-form-message"
            className={errors.message ? 'border-error' : ''}
            {...register('message', { required: true })}
          />
          {errors.message && (
            <p className="mt-2 flex items-center text-sm text-error">
              <Icons.Warning
                aria-hidden
                className="me-2 inline size-5"
              />
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="flex max-sm:flex-col-reverse max-sm:gap-y-6 sm:items-center sm:justify-between">
          <a
            className="inline-flex items-center text-neutrals-300 transition-colors hover:text-neutrals-50 focus-visible:text-neutrals-50"
            href={`mailto:${siteConfig.email}`}
            title="Hit me up"
          >
            <Icons.Envelope
              aria-hidden="true"
              className="me-2 inline size-5"
            />
            {siteConfig.email}
          </a>
          <Button
            type="submit"
            className="disabled:cursor-progress max-sm:w-full"
          >
            Hit me up
            <div
              aria-hidden
              className="ms-2 inline opacity-70 group-enabled:hidden"
            >
              {/* <Ring
                size={20}
                lineWeight={5}
                speed={2}
                color="currentColor"
              /> */}
            </div>
            <Icons.Rocket
              aria-hidden
              className="ms-2 inline size-5 group-disabled:hidden"
            />
          </Button>
        </div>
        {errors.root && (
          <p className="mt-2 flex items-center text-sm text-error">
            <Icons.Warning
              aria-hidden
              className="me-2 inline size-5"
            />
            {errors.root.message}
          </p>
        )}
      </fieldset>
    </form>
  );
}

export default ContactForm;
