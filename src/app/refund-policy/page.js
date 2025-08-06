import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
// ...existing code...
import './RefundPolicy.css';

// Generate metadata for this page
export async function generateMetadata() {
  return generatePageMetadata('refund-policy');
}

export default function RefundPolicy() {

  return (
    <>
      <div className="refund-container">
        <h1 className="refund-title">Refund Policy</h1>

        <p>
          We are committed to ensuring your satisfaction with any product, service, course, or workshop you have purchased from us. Please read the following terms carefully as they govern our refund policy.
        </p>

        <h2>Workshops</h2>
        <p>No refunds or credits will be granted against payments related to workshops.</p>

        <h2>Courses</h2>
        <p>
          We do not offer refunds for courses. Please carefully consider your schedule and commitment before enrolling. You may transfer your enrollment to a subsequent cohort. A nominal administrative fee will apply for such transfers.
        </p>
        <p>
          Should a refund be granted, please allow 5–7 business days for the transaction to be processed by our payment partners (Razorpay and Stripe). The refunded amount will be credited to your original method of payment.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our refund policy, please contact us by email at <strong>support@skipperx.io</strong>
        </p>
      </div>
    </>
  );
}
