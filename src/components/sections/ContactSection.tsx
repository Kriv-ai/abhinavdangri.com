import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { Mail, Phone, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/icons";

export function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-16">
        <h2 className="text-display mb-4">Get in Touch</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Interested in AI strategy, governance consulting, or a speaking engagement? Let's connect.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="glow-primary">
          <CardContent className="p-8 md:p-10 space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <a href={`mailto:${profile.email}`} className="text-foreground hover:text-primary transition-colors">
                    {profile.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Phone</p>
                  <a href={`tel:${profile.phone}`} className="text-foreground hover:text-primary transition-colors">
                    {profile.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Location</p>
                  <p className="text-foreground">{profile.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <LinkedinIcon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">LinkedIn</p>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                    in/abhinavdangri
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
              <Button size="lg" className="flex-1" asChild>
                <a href={`mailto:${profile.email}`}>
                  Send an Email <ArrowRight size={16} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="flex-1" asChild>
                <a href={profile.website} target="_blank" rel="noopener noreferrer">
                  Visit Kriv AI <ExternalLink size={16} />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
