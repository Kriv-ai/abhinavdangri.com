import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { Mail, Phone, MapPin, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/icons";

export function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Let's Talk</p>
          <h2 className="text-display font-serif mb-4">Ready to Move Your AI Forward?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Whether you're starting your AI journey or rescuing a stalled pilot, let's discuss how to get you to production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Book a call CTA */}
          <Card className="border-accent/30 bg-accent/5">
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold font-serif mb-2">Book a Free Strategy Call</h3>
                <p className="text-muted-foreground text-sm">
                  30 minutes. No pitch. We'll discuss your AI challenges and whether I can help.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={16} className="text-accent shrink-0" />
                  30-minute video call
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail size={16} className="text-accent shrink-0" />
                  AI readiness quick-assessment included
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ArrowRight size={16} className="text-accent shrink-0" />
                  Actionable next steps, whether we work together or not
                </div>
              </div>

              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg" asChild>
                <a href={`mailto:${profile.email}?subject=Strategy Call Request&body=Hi Abhinav, I'd like to book a strategy call to discuss...`}>
                  Book Your Strategy Call <ArrowRight size={16} />
                </a>
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                I respond within 24 hours. No spam, ever.
              </p>
            </CardContent>
          </Card>

          {/* Right: Direct contact */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h3 className="text-xl font-bold font-serif">Or Reach Out Directly</h3>

              <div className="space-y-5">
                <a href={`mailto:${profile.email}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Email</p>
                    <p className="text-foreground group-hover:text-primary transition-colors font-medium">{profile.email}</p>
                  </div>
                </a>

                <a href={`tel:${profile.phone}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Phone</p>
                    <p className="text-foreground group-hover:text-primary transition-colors font-medium">{profile.phone}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">{profile.location}</p>
                  </div>
                </div>

                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <LinkedinIcon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">LinkedIn</p>
                    <p className="text-foreground group-hover:text-primary transition-colors font-medium">in/abhinavdangri</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
