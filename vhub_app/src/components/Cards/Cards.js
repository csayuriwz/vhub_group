import { useState } from "react";
import {
  BoxCard,
  BoxDateCancel,
  BoxRateTime,
  BoxTextCard,
  BoxTextClinicCard,
  BoxTextDoctorCard,
} from "../Container/StyleContainer";
import { ConsultDate, ConsultDateGray } from "../DateConsult/StyleDateConsult";
import { CardCancel, SeeRecord } from "../Descriptions/Descriptions";
import {
  AgeTextCard,
  DoctorArea,
  HourText,
  HourTextGray,
  HourTextGrey,
  LocalizationText,
  RateText,
  RoutineTextCard,
  SeeMedicalRecord,
} from "../Descriptions/StyledDescriptions";
import { ImageCard, PointCard } from "../Images/StyleImages";
import { NameCard, NameCardClinic, NameCardSelect } from "../Title/StyleTitle";
import {
  AgeCard,
  AgeCardDoc,
  BoxRate,
  CardContainer,
  CardContainerClinic,
} from "./StyleCards";

import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Card = ({
  url,
  name,
  age,
  routine,
  hour,
  status,
  onPressCancel,
  onPressAppointment,
  onPressMap,
  setShowModalAppo = null,
  onPressAppointmentCard,
  navigation,
  dataConsulta,
}) => {



  const Check = () => {

    if (status === "Pendente") {
      return (
        <BoxDateCancel>
          <ConsultDate>
            <FontAwesome6 name="clock" size={15} color="#49B3BA" />

            <HourText>{hour}</HourText>
          </ConsultDate>

          <CardCancel onPressCancel={onPressCancel} text={"Cancelar"} />
        </BoxDateCancel>
      );
    } else if (status === "Realizada") {
      return (
        <BoxDateCancel>
          <ConsultDateGray>
            <FontAwesome6 name="clock" size={15} color="#4E4B59" />

            <HourTextGray>{hour}</HourTextGray>
          </ConsultDateGray>

          <SeeRecord
            onPressAppointment={onPressAppointment}
            text={"Ver Prontuário"}
          />
        </BoxDateCancel>
      );
    } else if (status === "Cancelada") {
      return (
        <BoxDateCancel>
          <ConsultDateGray>
            <FontAwesome6 name="clock" size={15} color="#4E4B59" />

            <HourTextGray>{hour}</HourTextGray>
          </ConsultDateGray>
        </BoxDateCancel>
      );
    }
  };

  return (
    <CardContainer onPress={() => {
      setShowModalAppo(true)
      onPressMap;
    }}>
      <BoxCard>
        <ImageCard source={{ uri: url }} />

        <BoxTextCard>
          <NameCard>{name}</NameCard>

          <AgeCard>
            <AgeTextCard>{age}</AgeTextCard>

            <PointCard source={require("../../assets/PointCard.png")} />

            <RoutineTextCard>{routine}</RoutineTextCard>
          </AgeCard>

          {Check()}
        </BoxTextCard>
      </BoxCard>
    </CardContainer>
  );
};

export const CardSelectDoctor = ({ url, name, doctorArea, onPress, selecionado = false }) => {
  return (
    <CardContainer onPress={onPress} selecionada={selecionado} >
      <ImageCard source={{ uri: url }} />

      <BoxCard>
        <BoxTextDoctorCard>
          <NameCardSelect>{name}</NameCardSelect>

          <DoctorArea>{doctorArea}</DoctorArea>
        </BoxTextDoctorCard>
      </BoxCard>
    </CardContainer>
  );
};


export const CardSelectClinic = ({
  name,
  localization,
  onPress,
  selecionado = false
  //  rate,
  //  openTime
}) => {
  return (
    <CardContainerClinic
      onPress={onPress}
      selecionada={selecionado}
    >
      <BoxCard>
        <BoxTextClinicCard>
          <NameCardClinic>{name}</NameCardClinic>

          <LocalizationText>{localization}</LocalizationText>
        </BoxTextClinicCard>

      </BoxCard>
    </CardContainerClinic>
  );
};
