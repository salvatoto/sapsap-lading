import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
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
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 3, 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to SAPSAP ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you understand how we collect, use, and safeguard your personal information when you use our language learning application and related services (collectively, the "Service").
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This Privacy Policy applies to users of the SAPSAP mobile application, website, and any associated services. By using our Service, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-medium mb-3 mt-6">2.1 Account Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              When you create an account, we collect:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Email address</li>
              <li>Password (stored securely using industry-standard hashing)</li>
              <li>Username and display name (optional)</li>
              <li>Profile picture (optional)</li>
              <li>Native language and target language preferences</li>
              <li>Learning goals and preferences</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">2.2 Learning Data</h3>
            <p className="text-muted-foreground leading-relaxed">
              To personalize your learning experience, we collect:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Story progress and completion status</li>
              <li>Conversation history with AI characters</li>
              <li>Your responses and interactions within lessons</li>
              <li>Time spent on activities and response patterns</li>
              <li>Proficiency level assessments</li>
              <li>Vocabulary and grammar progress</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">2.3 Voice Data</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you use voice features, we may collect:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Voice recordings for speech-to-text functionality</li>
              <li>Audio data is processed to convert speech to text and is not stored permanently unless explicitly saved by you</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">2.4 Device Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              We automatically collect certain device information:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Device type, model, and operating system</li>
              <li>App version and build number</li>
              <li>Device language and locale settings</li>
              <li>Unique device identifiers</li>
              <li>Push notification tokens (if notifications are enabled)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">2.5 Usage Analytics</h3>
            <p className="text-muted-foreground leading-relaxed">
              We collect analytics data to improve our Service:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Feature usage patterns</li>
              <li>App performance metrics</li>
              <li>Error logs and crash reports</li>
              <li>Session duration and frequency</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">2.6 Payment Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              For premium subscriptions, payment processing is handled by third-party providers (Apple App Store, Google Play Store, or Stripe). We do not directly store your full payment card details. We receive and store:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Subscription status and plan type</li>
              <li>Transaction IDs and billing history</li>
              <li>Payment provider customer identifiers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Provide, maintain, and improve our language learning Service</li>
              <li>Personalize your learning experience based on your progress and preferences</li>
              <li>Generate AI-powered responses and feedback tailored to your level</li>
              <li>Process transactions and manage your subscription</li>
              <li>Send push notifications about your learning progress (if enabled)</li>
              <li>Respond to your comments, questions, and support requests</li>
              <li>Analyze usage patterns to improve our content and features</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. AI and Data Processing</h2>
            <p className="text-muted-foreground leading-relaxed">
              SAPSAP uses artificial intelligence to provide interactive language learning experiences. When you interact with AI characters:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Your messages are processed by AI language models (including services from Anthropic and OpenAI) to generate contextually appropriate responses</li>
              <li>Conversation context is used to maintain coherent dialogues within stories</li>
              <li>Your interactions help us improve the quality of AI responses for all users</li>
              <li>We do not use your personal conversations to train external AI models without your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may share your information with:
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">5.1 Service Providers</h3>
            <p className="text-muted-foreground leading-relaxed">
              We work with third-party companies to provide our Service:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li><strong>AI Providers:</strong> Anthropic, OpenAI, and OpenRouter for AI-powered conversations</li>
              <li><strong>Analytics:</strong> Mixpanel for usage analytics</li>
              <li><strong>Push Notifications:</strong> OneSignal and Expo for delivering notifications</li>
              <li><strong>Payment Processing:</strong> RevenueCat and Stripe for subscription management</li>
              <li><strong>Email Services:</strong> Resend for transactional emails</li>
              <li><strong>Speech Processing:</strong> Deepgram for speech-to-text services</li>
              <li><strong>Cloud Storage:</strong> Cloudflare for content delivery and storage</li>
              <li><strong>Authentication:</strong> Google, GitHub, and TikTok for social login options</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">5.2 Legal Requirements</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may disclose your information if required by law, or if we believe such action is necessary to comply with legal processes, protect our rights, or ensure the safety of our users.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">5.3 Business Transfers</h3>
            <p className="text-muted-foreground leading-relaxed">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Passwords are hashed using industry-standard algorithms</li>
              <li>All data transmission is encrypted using HTTPS/TLS</li>
              <li>Access to personal data is restricted to authorized personnel</li>
              <li>Regular security assessments and updates</li>
              <li>Secure session management with automatic expiration</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information for as long as your account is active or as needed to provide you with our Service. We may retain certain information after account deletion for:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Compliance with legal obligations</li>
              <li>Resolution of disputes</li>
              <li>Enforcement of our agreements</li>
              <li>Legitimate business purposes (in anonymized form)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Your Rights and Choices</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
              <li><strong>Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Opt-out:</strong> Disable push notifications or analytics tracking</li>
              <li><strong>Withdraw Consent:</strong> Where processing is based on consent, you may withdraw it at any time</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, please contact us at privacy@sapsap.app or use the in-app account settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Service is not directed to children under the age of 13 (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at privacy@sapsap.app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer data internationally, we ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. California Privacy Rights (CCPA)</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Right to know what personal information is collected, used, and shared</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. European Privacy Rights (GDPR)</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you are in the European Economic Area (EEA), United Kingdom, or Switzerland, you have rights under the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Right to access, rectify, or erase your personal data</li>
              <li>Right to restrict or object to processing</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Our legal bases for processing include: performance of contract, legitimate interests, consent, and legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-card rounded-lg border border-border">
              <p className="text-foreground font-medium">SAPSAP</p>
              <p className="text-muted-foreground">Email: privacy@sapsap.app</p>
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

export default PrivacyPolicy;
