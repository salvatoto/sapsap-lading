import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
          <Logo width={100} height={34} />
          <div className="w-16" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 3, 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to SAPSAP. These Terms of Service ("Terms") govern your access to and use of the SAPSAP mobile application, website, and related services (collectively, the "Service") provided by SAPSAP ("we," "us," or "our").
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By creating an account, accessing, or using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              SAPSAP is a language learning platform that uses AI-generated stories and interactive conversations to help users learn new languages. The Service includes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Interactive story-based language lessons</li>
              <li>AI-powered conversations with virtual characters</li>
              <li>Vocabulary and grammar exercises</li>
              <li>Progress tracking and personalized learning paths</li>
              <li>Text-to-speech and speech-to-text features</li>
              <li>Premium subscription features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
            <p className="text-muted-foreground leading-relaxed">
              To use certain features of the Service, you must create an account. When creating an account, you agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Be responsible for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You may not create an account if you are under 13 years of age (or the applicable age of digital consent in your jurisdiction). By creating an account, you represent that you meet this age requirement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Subscriptions and Payments</h2>

            <h3 className="text-xl font-medium mb-3 mt-6">4.1 Free and Premium Features</h3>
            <p className="text-muted-foreground leading-relaxed">
              SAPSAP offers both free and premium subscription tiers. Free users have access to limited content, while premium subscribers unlock additional stories, features, and benefits.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">4.2 Subscription Terms</h3>
            <p className="text-muted-foreground leading-relaxed">
              Premium subscriptions are billed on a recurring basis (monthly or annually) until cancelled. By subscribing, you authorize us to charge your selected payment method for the subscription fees.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">4.3 In-App Purchases</h3>
            <p className="text-muted-foreground leading-relaxed">
              Subscriptions purchased through the Apple App Store or Google Play Store are subject to the terms and conditions of those platforms. Refund requests for in-app purchases must be directed to the respective app store.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">4.4 Cancellation</h3>
            <p className="text-muted-foreground leading-relaxed">
              You may cancel your subscription at any time through your account settings or the app store where you made the purchase. Cancellation takes effect at the end of the current billing period. No refunds are provided for partial subscription periods.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">4.5 Price Changes</h3>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to change subscription prices. You will be notified of any price changes in advance, and changes will take effect at the start of your next billing cycle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others, including intellectual property rights</li>
              <li>Harass, abuse, or harm other users or AI characters</li>
              <li>Attempt to extract, scrape, or collect data from the Service without authorization</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Use the Service to transmit malware, viruses, or harmful code</li>
              <li>Create multiple accounts to abuse free trials or promotions</li>
              <li>Share your account credentials with others</li>
              <li>Use automated systems or bots to access the Service</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. User Content</h2>

            <h3 className="text-xl font-medium mb-3 mt-6">6.1 Your Content</h3>
            <p className="text-muted-foreground leading-relaxed">
              You may have the opportunity to submit content, such as story ideas, feedback, or profile information ("User Content"). You retain ownership of your User Content, but by submitting it, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display your User Content in connection with the Service.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">6.2 Content Guidelines</h3>
            <p className="text-muted-foreground leading-relaxed">
              User Content must not contain:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Illegal, harmful, or offensive material</li>
              <li>Content that infringes on third-party rights</li>
              <li>Spam, advertising, or promotional content</li>
              <li>Personal information of others without consent</li>
              <li>Malicious code or links</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">6.3 Content Moderation</h3>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to review, remove, or disable access to any User Content that violates these Terms or is otherwise objectionable, at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>

            <h3 className="text-xl font-medium mb-3 mt-6">7.1 Our Content</h3>
            <p className="text-muted-foreground leading-relaxed">
              The Service, including all stories, characters, lessons, graphics, user interface, and underlying software, is owned by SAPSAP and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works from our content without our express written permission.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">7.2 Limited License</h3>
            <p className="text-muted-foreground leading-relaxed">
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your personal, non-commercial language learning purposes, subject to these Terms.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">7.3 Feedback</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you provide us with feedback, suggestions, or ideas about the Service, you grant us the right to use such feedback without compensation or attribution to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. AI-Generated Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service uses artificial intelligence to generate stories, character responses, and learning content. Please be aware that:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>AI-generated content may contain errors, inaccuracies, or inconsistencies</li>
              <li>Character responses are generated by AI and do not represent real people or their views</li>
              <li>The Service is designed for language learning and should not be relied upon for factual, legal, medical, or professional advice</li>
              <li>AI capabilities and responses may vary and are subject to improvement over time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service may integrate with or link to third-party services (such as payment processors, social login providers, and app stores). Your use of third-party services is subject to their respective terms and privacy policies. We are not responsible for the content, privacy practices, or availability of third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Disclaimers</h2>
            <p className="text-muted-foreground leading-relaxed">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not warrant that:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>The Service will be uninterrupted, secure, or error-free</li>
              <li>The results obtained from using the Service will be accurate or reliable</li>
              <li>Any errors in the Service will be corrected</li>
              <li>You will achieve any particular level of language proficiency</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SAPSAP AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR $100 USD, WHICHEVER IS GREATER.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless SAPSAP and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to your violation of these Terms, your use of the Service, or your User Content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Termination</h2>

            <h3 className="text-xl font-medium mb-3 mt-6">13.1 Termination by You</h3>
            <p className="text-muted-foreground leading-relaxed">
              You may terminate your account at any time by deleting your account through the app settings or contacting us at support@sapsap.app.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">13.2 Termination by Us</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may suspend or terminate your account and access to the Service at any time, with or without cause, including for violation of these Terms. Upon termination, your right to use the Service ceases immediately.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">13.3 Effect of Termination</h3>
            <p className="text-muted-foreground leading-relaxed">
              Upon termination, you lose access to your account and any associated data. We may delete your data in accordance with our Privacy Policy. Provisions of these Terms that should survive termination will remain in effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Modifications to the Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">15. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms from time to time. When we make material changes, we will notify you by updating the "Last updated" date and, where appropriate, providing additional notice (such as in-app notification or email). Your continued use of the Service after changes become effective constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">16. Governing Law and Disputes</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which SAPSAP is incorporated, without regard to its conflict of law provisions. Any disputes arising from these Terms or the Service shall be resolved through binding arbitration or in the courts of competent jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">17. General Provisions</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and SAPSAP regarding the Service.</li>
              <li><strong>Severability:</strong> If any provision of these Terms is found unenforceable, the remaining provisions will remain in effect.</li>
              <li><strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms does not constitute a waiver of that right or provision.</li>
              <li><strong>Assignment:</strong> You may not assign or transfer your rights under these Terms without our consent. We may assign our rights and obligations without restriction.</li>
              <li><strong>No Agency:</strong> Nothing in these Terms creates a partnership, joint venture, or agency relationship between you and SAPSAP.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">18. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about these Terms, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-card rounded-lg border border-border">
              <p className="text-foreground font-medium">SAPSAP</p>
              <p className="text-muted-foreground">Email: support@sapsap.app</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 mt-12">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 SAPSAP. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
