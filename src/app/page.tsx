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
        { name: "Startseite", id: "hero" },
        { name: "Über uns", id: "about" },
        { name: "Training", id: "training" },
        { name: "Kontakt", id: "contact" },
      ]}
      brandName="WSV Dynamo 22"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "rotated-rays-animated" }}
      title="Willkommen beim WSV Dynamo 22"
      description="Der Schwimm- und Flossenschwimmverein für alle Altersgruppen in Wien."
      leftCarouselItems={[
        { imageSrc: "https://img.freepik.com/free-photo/swimming-pool-blue-water-texture_1232-2632.jpg", imageAlt: "Schwimmbecken Wasser" },
        { imageSrc: "https://img.freepik.com/free-photo/swimmer-goggles-cap-pool_23-2148357015.jpg", imageAlt: "Schwimmausrüstung" },
        { imageSrc: "https://img.freepik.com/free-photo/abstract-water-ripple_1098-17551.jpg", imageAlt: "Wasser Textur" }
      ]}
      rightCarouselItems={[
        { imageSrc: "https://img.freepik.com/free-photo/swimming-pool-top-view_1232-2633.jpg", imageAlt: "Pool Übersicht" },
        { imageSrc: "https://img.freepik.com/free-photo/blue-water-surface_1232-2635.jpg", imageAlt: "Wasser Oberfläche" },
        { imageSrc: "https://img.freepik.com/free-photo/swimming-lane-markers_23-2148356985.jpg", imageAlt: "Schwimmbahn" }
      ]}
      buttons={[{ text: "Jetzt Mitglied werden", href: "#contact" }]}
      avatarText="Familienfreundlich & Engagiert"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      title="Tradition trifft moderne Schwimmtechnik"
      metrics={[
        { icon: Award, label: "Erfahrung", value: "20+ Jahre" },
        { icon: Users, label: "Gemeinschaft", value: "300+ Sportler" },
        { icon: Activity, label: "Trainingsgruppen", value: "6" }
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="training" data-section="training">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      title="Unsere Angebote"
      description="Technik, Ausdauer und Teamgeist für alle Altersstufen."
      features={[
        { title: "Anfängerkurse", description: "Spielerisch die Sicherheit im Wasser gewinnen.", imageSrc: "https://img.freepik.com/free-photo/swimming-kickboard-floating-pool_23-2148356999.jpg" },
        { title: "Leistungsgruppen", description: "Wettkampfvorbereitung mit professioneller Technikschulung.", imageSrc: "https://img.freepik.com/free-photo/stopwatch-on-swimming-pool-edge_23-2148356994.jpg" },
        { title: "Flossenschwimmen", description: "Dynamische Bewegung unter Wasser für Profis.", imageSrc: "https://img.freepik.com/free-photo/diving-fins-blue-background_23-2148356980.jpg" }
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      title="Vereinsleben 2025"
      metrics={[
        { id: "m1", value: "15", description: "Events & Ausflüge" },
        { id: "m2", value: "5", description: "Wettkämpfe" },
        { id: "m3", value: "100%", description: "Leidenschaft" }
      ]}
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTwo
      title="Unser Trainer-Team"
      description="Gemeinsam erreichen wir sportliche Ziele."
      members={[
        { id: "t1", name: "Head Coach", role: "Training & Planung", description: "Langjährige Erfahrung in der Schwimmförderung.", imageSrc: "https://img.freepik.com/free-photo/swimming-pool-background-water-ripples_1232-2630.jpg" },
        { id: "t2", name: "Trainerstab", role: "Nachwuchsförderung", description: "Wir vermitteln Spaß und Technik.", imageSrc: "https://img.freepik.com/free-photo/water-surface-texture_1232-2631.jpg" }
      ]}
      gridVariant="two-columns-alternating-heights"
      animationType="slide-up"
      textboxLayout="default"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      title="Stimmen aus dem Verein"
      testimonials={[
        { id: "1", name: "Vereinsmitglied", role: "Elternteil", testimonial: "Ein tolles Team, das unsere Kinder hervorragend fördert.", imageSrc: "https://img.freepik.com/free-photo/blue-waves-background_23-2148356987.jpg" },
        { id: "2", name: "Schwimmsportler", role: "Wettkampfgruppe", testimonial: "Professionelles Training mit viel Herz.", imageSrc: "https://img.freepik.com/free-photo/swimming-pool-water-texture_1232-2632.jpg" }
      ]}
      animationType="slide-up"
      textboxLayout="default"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      title="Häufige Fragen"
      faqs={[
        { id: "q1", title: "Wie kann man Mitglied werden?", content: "Senden Sie uns einfach eine Nachricht per Kontaktformular." },
        { id: "q2", title: "Wo findet das Training statt?", content: "Wir trainieren in verschiedenen öffentlichen Bädern Wiens." }
      ]}
      faqsAnimation="slide-up"
      textboxLayout="default"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      text="Interesse geweckt? Werde Teil unseres Schwimmteams!"
      background={{ variant: "rotated-rays-animated" }}
      buttons={[{ text: "Kontakt aufnehmen", href: "mailto:office@wsv-dynamo22.at" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoText="WSV Dynamo 22"
      columns={[
        { items: [{ label: "Über uns", href: "#about" }, { label: "Impressum", href: "#" }] },
        { items: [{ label: "Training", href: "#training" }, { label: "Kontakt", href: "#contact" }] }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
