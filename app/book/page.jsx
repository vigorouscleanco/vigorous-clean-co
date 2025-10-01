export const metadata = { title: "Book — Vigorous Clean Co." };

export default function BookPage() {
  return (
    <div className="container-app py-10">
      <h1 className="text-2xl font-semibold mb-4">Book Your Cleaning</h1>
      <p className="text-gray-600 mb-6">Select a service, date, and secure your spot in minutes.</p>

      {/* Inline embed of your Square booking page */}
      <div className="rounded-2xl border border-gray-100 shadow-soft overflow-hidden">
        <iframe
          src="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services?single=true"
          title="Vigorous Clean Co. Booking"
          className="w-full"
          style={{ height: "85vh" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Having trouble with the embed?{" "}
        <a
          className="underline"
          href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
          target="_blank"
          rel="noopener"
        >
          Open the booking page
        </a>
        .
      </p>
    </div>
  );
}
