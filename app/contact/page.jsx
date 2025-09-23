'use client';


import HeroSection from '@/components/home/HeroSection';
import ContactForm from '@/components/contact/ContactForm';
import Directions from '@/components/contact/Directions';
import { useSearchParams } from 'next/navigation';

export default function Contact() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  return (
    <div>
      {
        !id ? (
          <>
            <HeroSection

              welcomeHeading="CONTACT"
            />
          </>
        ) : (
          <>
            <HeroSection

              welcomeHeading="Book Room"
            />
          </>
        )
      }


      {/* Contact Form & Info */}
      <ContactForm />
      <Directions />

      {/* Directions */}



    </div>
  );
}