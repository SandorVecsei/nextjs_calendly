import { PopupWidget } from 'react-calendly';

export default function Calendly() {
  return (
    <div className="cal-div">
      <button>
        <PopupWidget
          url="https://calendly.com/acmesales"
          rootElement={document.getElementById('__next')}
          text="Book Your Appointment"
          textColor="#ffffff"
          color="#00a2ff"
        />
      </button>
    </div>
  );
}
