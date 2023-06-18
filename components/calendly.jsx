import { PopupWidget } from 'react-calendly';

export default function Calendly() {
  return (
    <div className="cal-div">
      <button>
        <PopupWidget
          url="https://calendly.com/keycounselling/1-hour-counselling?month=2023-06"
          rootElement={document.getElementById('__next')}
          text="Book Your Appointment"
          textColor="#ffffff"
          color="#00a2ff"
        />
      </button>
    </div>
  );
}
