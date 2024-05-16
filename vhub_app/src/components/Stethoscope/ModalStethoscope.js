import { Alert, Modal } from "react-native";
import { TitleModal } from "../Title/StyleTitle";
import {
  ButtonLargeSelect,
  FilterButton,
  FilterButtonStet,
} from "../Button/Button";
import { LargeInputTextBox, LargeInputTextBoxStet } from "../InputBox/InputBox";
import {
  ButtonHomeContainer,
  ButtonHomeContainerStet,
} from "../Container/StyleContainer";
import {
  ContainerLabel,
  FlexButtons,
  ModalStetContent,
  StethoscopeModal,
} from "./StyleSthetoscope";
import { useState } from "react";
import { Label } from "../Label/Label";
import { CardCancelLess } from "../Descriptions/Descriptions";

export const ModalStethoscope = ({
  navigation,
  visible,
  setShowModalStethoscope,
  ...rest
}) => {


  const [selected, setSelected] = useState({
    rotina: false,
    exame: false,
    urgencia: false,
  });

  const [localizacaoP, setLocalizacaoP] = useState('');


  const [agendamento, setAgendamento] = useState(null);

  async function HandleContinue() {

    await setShowModalStethoscope(false);

    navigation.replace("SelectClinic", { agendamento: agendamento })

  }


  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <StethoscopeModal>
        <ModalStetContent>
          <TitleModal>Agendar Consulta</TitleModal>

          <ContainerLabel>
            <Label textLabel={"Qual o nível da consulta ?"} />
            <ButtonHomeContainerStet>


              <FilterButtonStet
                onPress={() => {
                  setSelected({ rotina: true }),
                    setAgendamento({
                      ...agendamento, //Manter as informações que já existem dentro do state (agendamento)

                      prioridadeId: 'A52917A5-1D6C-4201-A5BF-6CB227DCD8CB',
                      prioridadeLabel: 'Rotina'
                    })
                }}
                selected={selected.rotina}
                text={"Rotina"}
              />

 
              <FilterButtonStet
                onPress={() => {
                  setSelected({ exame: true }),
                    setAgendamento({
                      ...agendamento,

                      prioridadeId: '21728D33-83F0-4473-84E6-1C2BE78CF163',
                      prioridadeLabel: 'Exame'
                    })
                }}
                selected={selected.exame}
                text={"Exame"}
              />


              {/* 50A6C7FF-5720-4D41-9B36-6E1C813A4908 */}
              <FilterButtonStet
                onPress={() => {
                  setSelected({ urgencia: true }),
                    setAgendamento({
                      ...agendamento,

                      prioridadeId: 'F1FB1EDD-E0A5-44FC-9B58-E8ADDA34F54B',
                      prioridadeLabel: 'Urgência'
                    })
                }}
                selected={selected.urgencia}
                text={"Urgência"}
              />

            </ButtonHomeContainerStet>
          </ContainerLabel>

          <LargeInputTextBoxStet
            placeholderTextColor={"#34898F"}
            textLabel={"Informe a localização desejada: "}
            placeholder={"Informe a localização"}
            editable={true}

            fieldValue={agendamento ? agendamento.localizacao : null}

            onChangeText={x => {
              setAgendamento({
                ...agendamento,

                localizacao: x
              }),
                setLocalizacaoP(x)

            }}
          />

          <FlexButtons>
            <ButtonLargeSelect
              onPress={() => {

                // localizacaoP != null && selected.exame == true || selected.rotina == true || selected.urgencia == true ?
                //   HandleContinue() :
                //   alert("Preencha os campos para prosseguir !!!")
                
                if(selected.exame == true || selected.rotina == true || selected.urgencia == true){
                  
                    if(localizacaoP != ""){
                      HandleContinue()
                    }else{
                      Alert.alert(
                        'Erro ao prosseguir !!!',
                        'Preencha os campos para prosseguir !!!',
                        [
                          { text: 'Ok'},
                        ]
                      )
                    }
              
                }else{
                  Alert.alert(
                    'Erro ao prosseguir !!!',
                    'Preencha os campos para prosseguir !!!',
                    [
                      { text: 'Ok'},
                    ]
                  )
                }
              }}
              text={"Continuar"}
            />

            <CardCancelLess
              onPressCancel={() => setShowModalStethoscope(false)}
              text={"Cancelar"}
            />

          </FlexButtons>
        </ModalStetContent>
      </StethoscopeModal>
    </Modal>
  );
};
