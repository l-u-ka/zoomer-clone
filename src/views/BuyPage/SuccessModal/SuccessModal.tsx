import { useThemeProvider } from '@src/providers/ThemeProvider/useThemeProvider';
import { Button, ConfigProvider, Modal, theme } from 'antd';
import closeIcon from '@src/assets/icons/mobile-modal-close.png'
import { FormattedMessage } from 'react-intl';
import successImg from '@src/assets/icons/successImg.png'

export default function SuccessModal({modalOpen, closeModal} : {modalOpen: boolean, closeModal: () => void}) {
    
    const {lightMode} = useThemeProvider();
    const {defaultAlgorithm, darkAlgorithm} = theme;

    const configStyle = {
        algorithm: !lightMode ? darkAlgorithm : defaultAlgorithm,
        "components": {
            "Button": {
              "colorPrimary": "rgb(236, 94, 42)",
              "colorPrimaryHover": "rgb(236, 94, 42)",
              "colorPrimaryActive": "rgb(236, 94, 42)",
              "borderRadius": 12,
              "controlHeight": 50,
              "controlHeightLG": 50,
              "controlHeightSM": 30,
              "lineHeight": 1.75,
              "defaultBorderColor": "rgb(250, 84, 28)",
            },
            "Modal": {
              "borderRadiusLG": 20,
              "borderRadiusSM": 10
            },
          }
    }


  return (
    <ConfigProvider theme={configStyle}>
        <Modal centered open={modalOpen} onCancel={closeModal} maskClosable={false} footer={false} className="!w-[50%]" closeIcon={<img className="relative top-[-8px] w-auto" src={closeIcon} alt="modal close icon"/>}>
                <div>
                    <h3 className="firago-medium text-base leading-[19px] text-center mt-5 text-black-main dark:text-white"><FormattedMessage id='congrats.bought.success'/></h3>
                    <img src={successImg} alt='success img' className='w-[240px] block mx-auto my-12'/>
                    <div className="flex justify-between">
                        <Button type="primary" className="w-full custom-button hover:scale-95 transition-all ease-in-out" onClick={closeModal}><FormattedMessage id='close'/></Button>
                    </div>
                </div>
            </Modal>
    </ConfigProvider>
  )
}