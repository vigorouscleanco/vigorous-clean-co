// app/account/page.js
export default function AccountPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold">Login</h1>
      <p className="mt-2 text-slate-600">
        Secure client access coming soon. For now, please book or manage your
        appointment via Square.
      </p>
      <a
        href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
        className="mt-6 inline-block rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white hover:opacity-90"
      >
        Go to Booking
      </a>
    </div>
  );
}

