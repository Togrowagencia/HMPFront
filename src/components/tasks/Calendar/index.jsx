import React, {useState, useEffect} from 'react'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import eventos from '@/data/events'
import ModalTask from '@/components/tasks/event'
dayjs.extend(customParseFormat);
import 'dayjs/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './css/styles.css'
dayjs.locale('es');
const localizer = dayjsLocalizer(dayjs)

const mensajes = {
  allDay: 'Todo el día',
  previous: 'Anterior',
  next: 'Siguiente',
  today: 'Hoy',
  month: 'Mes',
  week: 'Semana',
  day: 'Día',
  agenda: 'Agenda',
  date: 'Fecha',
  time: 'Hora',
  event: 'Evento',
  noEventsInRange: 'No hay eventos en este rango.',
  showMore: total => `+ Ver más (${total})`,
};

const CalendarPicker = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [modal2Open, setModal2Open] = useState(false);
    const handleEventClick = (event) => {
        const selected = eventos.find((item) => item.id === event.id_event);
        if(selected){
            setSelectedEvent(selected);
            setModal2Open(true);
        }
    };
    useEffect(() => {
      const eventosParse = eventos.map((task) => {
        const parsedDate = dayjs(task.endDate);
      
        return {
          title: task.name,
          start: parsedDate.toDate(),
          end: parsedDate.toDate(),
          id_event: task.id,
        };
      });

      setEvents(eventosParse);
      }
    , [eventos]);

  return (
    <div className='w-full h-full flex flex-col justify-start items-start gap-4'>
        <p className='inter-32 azul'>{dayjs().format('MMMM-YYYY').charAt(0).toUpperCase() + dayjs().format('MMMM-YYYY').slice(1).toLowerCase()}</p>
        <Calendar
            className='w-full h-full'
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            culture="es"
            messages={mensajes}
            onSelectEvent={handleEventClick}
            views={['month']}
            defaultView="month"
            toolbar={false}
            defaultDate={new Date()}
            popup={true}
        />

        <ModalTask modal2Open={modal2Open} setModal2Open={(e) => setModal2Open(e)} task={selectedEvent}/>
    </div>
  )
}

export default CalendarPicker