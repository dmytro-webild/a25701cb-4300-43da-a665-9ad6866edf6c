"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Activity, Award, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="noise"
        cardStyle="glass-depth"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Startseite",
          id: "hero",
        },
        {
          name: "Über uns",
          id: "about",
        },
        {
          name: "Training",
          id: "training",
        },
        {
          name: "Kontakt",
          id: "contact",
        },
      ]}
      brandName="WSV Dynamo 22"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Willkommen beim WSV Dynamo 22"
      description="Der Schwimm- und Flossenschwimmverein für Anfänger, Fortgeschrittene und Wettkampfsportler in Donaustadt und Floridsdorf."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-male-swimmer-prepared-race_23-2148357026.jpg",
          imageAlt: "professional swimming training",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fitness-group-girls-doing-aerobical-excercises-swimming-pool-aqua-park-sport-leisure-activities_627829-10857.jpg",
          imageAlt: "professional swimming training",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-swimmer-cap-swimming-goggles_171337-8010.jpg",
          imageAlt: "professional swimming training",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-swimmer-putting-swimming-goggles_23-2148356996.jpg",
          imageAlt: "professional swimming training",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/person-inside-giant-fishbowl_1122-2229.jpg",
          imageAlt: "professional swimming training",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-female-swimmer-posing-water_23-2148687608.jpg",
          imageAlt: "professional swimming training",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-professional-swimmer-swimming-pool_1303-24248.jpg",
          imageAlt: "professional swimming training",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-athlete-getting-out-pool_23-2149028418.jpg",
          imageAlt: "professional swimming training",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-fabulous-young-girl-standing-pool-water-park-touching-her-hair_627829-10892.jpg",
          imageAlt: "professional swimming training",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-stretching-outdoors_23-2148768955.jpg",
          imageAlt: "professional swimming training",
        },
      ]}
      buttons={[
        {
          text: "Jetzt Mitglied werden",
          href: "#contact",
        },
        {
          text: "Schwimmkurs anfragen",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-daily-practice-pool_23-2148357019.jpg",
          alt: "High angle daily practice at pool",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-male-swimmer-pointing-basin_23-2148356989.jpg",
          alt: "Front view male swimmer pointing at basin",
        },
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-sportsman-preparing-swimming-goggles_23-2148357020.jpg",
          alt: "High angle sportsman preparing swimming goggles",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-young-male-swimming-pool_23-2148357002.jpg",
          alt: "Side view young male at swimming pool",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-teenager-girl-swimsuit-swimming-blue-pool_169016-57816.jpg",
          alt: "A young teenager girl in a swimsuit swimming in a blue pool",
        },
      ]}
      avatarText="Über 300 aktive Sportler"
      marqueeItems={[
        {
          type: "text",
          text: "Donaustadt",
        },
        {
          type: "text",
          text: "Floridsdorf",
        },
        {
          type: "text",
          text: "Wettkampf",
        },
        {
          type: "text",
          text: "Training",
        },
        {
          type: "text",
          text: "Schwimmkurse",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Schwimmen lernen. Leistung steigern. Gemeinschaft erleben."
      metrics={[
        {
          icon: Award,
          label: "Jahre Erfahrung",
          value: "20+",
        },
        {
          icon: Users,
          label: "Aktive Sportler",
          value: "300+",
        },
        {
          icon: Activity,
          label: "Trainingsgruppen",
          value: "6",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="training" data-section="training">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Anfängerkurse",
          description: "Sicher schwimmen lernen in kleinen Gruppen.",
          imageSrc: "http://img.b2bpic.net/free-photo/little-cute-baby-boy-instructor-with-kid-mother-with-son_1157-42296.jpg",
        },
        {
          title: "Leistungsgruppen",
          description: "Wettkampforientiertes Training für Ambitionierte.",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-male-with-goggles-looking-up_23-2148326753.jpg",
        },
        {
          title: "Flossenschwimmen",
          description: "Maximale Geschwindigkeit unter Wasser.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-swimming-water_23-2149066309.jpg",
        },
      ]}
      title="Unsere Trainingsbereiche"
      description="Wir fördern Technik Leistung und Freude am Wasser in allen Leistungsstufen."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Meilensteine 2025"
      tag="Ausblick"
      metrics={[
        {
          id: "m1",
          value: "15",
          description: "Vereinsinterne Events",
        },
        {
          id: "m2",
          value: "5",
          description: "Meisterschaftsturniere",
        },
        {
          id: "m3",
          value: "100%",
          description: "Leidenschaft",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      members={[
        {
          id: "t1",
          name: "Markus Lässig",
          role: "Head Coach",
          description: "Dipl. Ernährungstrainer & erfahrener Schwimmtrainer.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-waterpolo-players_23-2151202984.jpg",
        },
        {
          id: "t2",
          name: "Annabell Salapa",
          role: "Trainerin",
          description: "Expertin für Technik und Einsteiger.",
          imageSrc: "http://img.b2bpic.net/free-photo/water-polo-players-pool-with-swimming-equipment_23-2150893929.jpg",
        },
        {
          id: "t3",
          name: "Dr. Rudolf Lässig",
          role: "Trainer",
          description: "Fokus auf Erwachsenentraining.",
          imageSrc: "http://img.b2bpic.net/free-photo/friends-swimming-pool_1098-16924.jpg",
        },
        {
          id: "t4",
          name: "Thomas Groch",
          role: "Trainer",
          description: "Spezialist für Fitness.",
          imageSrc: "http://img.b2bpic.net/free-photo/water-polo-players-pool-with-trophy_23-2150893975.jpg",
        },
      ]}
      title="Unser Trainer-Team"
      description="Professionelle Begleitung durch unsere erfahrenen Coaches."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Familie Mayer",
          role: "Eltern",
          testimonial: "Tolle Kurse und super Trainer!",
          imageSrc: "http://img.b2bpic.net/free-photo/water-polo-players-pool-with-swimming-equipment_23-2150893970.jpg",
        },
        {
          id: "2",
          name: "Lukas W.",
          role: "Schwimmer",
          testimonial: "Mein Training hat sich enorm verbessert.",
          imageSrc: "http://img.b2bpic.net/free-photo/blonde-swimmer-smiling-medium-shot_23-2148393568.jpg",
        },
        {
          id: "3",
          name: "Sophie K.",
          role: "Finswimmerin",
          testimonial: "Die Monoflosse ist der Wahnsinn!",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-wearing-goggles-swim-cap_23-2149028410.jpg",
        },
        {
          id: "4",
          name: "Familie Schmid",
          role: "Eltern",
          testimonial: "Sehr familienfreundlicher Verein.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-waterpolo-players_23-2151202983.jpg",
        },
        {
          id: "5",
          name: "Jonas T.",
          role: "Mitglied",
          testimonial: "Dynamo 22 ist wie eine zweite Heimat.",
          imageSrc: "http://img.b2bpic.net/free-photo/best-friends-spending-some-quality-time-together_23-2149032328.jpg",
        },
      ]}
      title="Was Mitglieder sagen"
      description="Erfahrungen unserer Vereinsmitglieder und Familien."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Wie kann ich beitreten?",
          content: "Einfach per E-Mail kontaktieren.",
        },
        {
          id: "q2",
          title: "Wo trainiert ihr?",
          content: "Wir sind an 4 Hallenbädern in Wien aktiv.",
        },
        {
          id: "q3",
          title: "Gibt es Probetrainings?",
          content: "Ja, jederzeit nach Vereinbarung.",
        },
      ]}
      title="Häufige Fragen"
      faqsAnimation="slide-up"
      description="Die wichtigsten Antworten rund um den WSV Dynamo 22."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-animated",
      }}
      text="Bereit für den Sprung ins Wasser? Kontaktiere unser Team für Infos zu Kursen und Mitgliedschaften."
      buttons={[
        {
          text: "Jetzt anfragen",
          href: "mailto:office@schwimmverein22.at",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Über uns",
              href: "#about",
            },
            {
              label: "Impressum",
              href: "#",
            },
            {
              label: "Datenschutz",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Training",
              href: "#training",
            },
            {
              label: "Kurse",
              href: "#contact",
            },
            {
              label: "Wettkämpfe",
              href: "#",
            },
          ],
        },
      ]}
      logoText="WSV Dynamo 22"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
