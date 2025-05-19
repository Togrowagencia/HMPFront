import React, { useState } from 'react';
import { Drawer } from 'antd';
import './css/styles.css';
import ArrayNotifications from '@/data/notifications';
import dayjs from 'dayjs';

const Notifications = () => {
    const [notificaciones, setNotificaciones] = useState(ArrayNotifications)
    const [open, setOpen] = useState(false);

    const hoy = dayjs();
    const ayer = hoy.subtract(1, 'day');
    const fechaHoy = hoy.format('YYYY-MM-DD');
    const fechaAyer = ayer.format('YYYY-MM-DD');

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const agruparNotificacionesPorFecha = (notificaciones) => {
        return notificaciones.reduce((acumulador, notificacion) => {
            const fecha = notificacion.createdAt.split("T")[0]; 
            if (!acumulador[fecha]) {
            acumulador[fecha] = [];
            }
            acumulador[fecha].push(notificacion);
            return acumulador;
        }, {});
    };

    const notificacionesAgrupadas = agruparNotificacionesPorFecha(notificaciones);

    const getEtiquetaFecha = (fecha) => {
        if (fecha === fechaHoy) return 'Hoy';
        if (fecha === fechaAyer) return 'Ayer';
        return dayjs(fecha).format('YYYY-MM-DD');
    };

  return (
    <>
        <button onClick={showDrawer}>
            <img src="/svg/notifications/iconNotifications.svg" alt="" />
        </button>

        <Drawer onClose={onClose} open={open}>
            {/**Header */}
            <div className='w-full h-[5%] flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <p className='inter-32 azul-alternativa'>Notificaciones</p>
                </div>
                <div><img src="/svg/notifications/close.svg" className="cursor-pointer" onClick={onClose}/></div>
            </div>
            {/**END::Header */}

            <div className='overflow-y-scroll h-[90%]'>
                {Object.keys(notificacionesAgrupadas).sort((a, b) => dayjs(b) - dayjs(a)).map((fecha, index) => (
                    <div key={index} className="my-4">
                    <h3 className="inter-32 azul-alternativa">
                        {getEtiquetaFecha(fecha)}
                    </h3>
                    <div className="my-3 flex flex-col gap-2">
                        {notificacionesAgrupadas[fecha].map((notificacion, idx) => (
                            <div key={idx} className="flex items-center gap-2 border px-4 rounded-[10px] h-[58px]">
                                <img
                                src={`/svg/notifications/${notificacion.icon}`}
                                alt="icono"
                                className="w-5 h-5"
                                />
                                <p className="inter-18 gris2">{notificacion.title}</p>
                            </div>
                        ))}
                    </div>
                    </div>
                ))}
            </div>

        </Drawer>
    </>
  )
}

export default Notifications