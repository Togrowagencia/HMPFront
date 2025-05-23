import React, {useState} from 'react'
import { Modal } from 'antd';
import PDF from '@/components/reports/pdf'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

const ModalPDF = () => {
        const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
        <button className='inter-16 gris w-[60%]' onClick={() => setModal2Open(true)}><img src="/svg/transactions/eye.svg" alt="" /></button>

        <Modal title="" centered open={modal2Open} onOk={() => setModal2Open(false)} onCancel={() => setModal2Open(false)}>
                <div className={`w-full h-full px-4 py-2 reportPDF flex flex-col gap-6`}>

                    {/**Header */}
                    <div className='flex items-center justify-end'>
                        <img src="/svg/modals/close-blue.svg" className="cursor-pointer" onClick={() => setModal2Open(false)}/>
                    </div>
                    {/**END::Header */}

                    <PDFViewer style={{ width: '100%', height: '440px' }}>
                        <PDF />
                    </PDFViewer>


                    <div className='flex items-center justify-end gap-4'>
                        <PDFDownloadLink document={<PDF />} fileName="reporte.pdf">
                            <button className='flex items-center justify-center bg-azul rounded-[5px] blanco inter-16 h-[32px] w-[110px] mr-[3%]'>
                                Descargar
                            </button>
                        </PDFDownloadLink>
                    </div>
                </div>         
        </Modal>
    </>
  )
}

export default ModalPDF