import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: '',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
const DragUpload = ({width}) => (
    <div style={{ width: width }} className=''>
        <Dragger {...props}>
            <div className='flex flex-col items-center justify-center w-full h-full gap-2'>
                <img src="/svg/folders/upload.svg" alt="" />
                <p className="inter-16 azul !font-bold">Carga tus documentos aqui</p>
            </div>
        </Dragger>
    </div>
);
export default DragUpload;