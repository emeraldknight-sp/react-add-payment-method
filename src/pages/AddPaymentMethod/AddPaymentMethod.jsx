import { Button } from "../../components/Button";
import { CardCredit } from "../../components/CardCredit/CardCredit";
import { Container } from "../../components/Container/Container";
import { Form } from "../../components/Form";
import { Panel } from "../../components/Panel";
import { StyledAddPaymentMethod } from "./AddPaymentMethod.style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Chip from "../../../public/cc-chip.svg";
import Icon from "../../../public/cc-icon.svg";
import Brand from "../../../public/cc-default.svg";

import { useRef } from "react";
import { useState } from "react";

import { IMaskInput, IMask } from "react-imask";
import { toast } from "react-toastify";

// import BrandVisa from "../../../public/cc-visa.svg";
// import BrandMasterd from "../../../public/cc-mastercard.svg";

export const AddPaymentMethod = () => {
  const toastId = useRef(null);

  const [number, setNumber] = useState("");
  const [owner, setOwner] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const dateProps = {
    mask: "MM{/}YY",
    blocks: {
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
      },
      YY: {
        mask: IMask.MaskedRange,
        from: String(new Date().getFullYear()).slice(2),
        to: String(new Date().getFullYear() + 10).slice(2),
      },
    },
  };

  const cvcProps = {
    mask: "000",
  };

  const ownerProps = {
    mask: /^[a-zA-Z ]*$/,
  }

  const cardNumberProps = {
    mask: [
      {
        mask: "0000 0000 0000 0000",
        regex: /^4\d{0,15}/,
        cardType: "visa",
      },
      {
        mask: "0000 0000 0000 0000",
        regex: /^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,12}/,
        cardType: "mastercard",
      },
      {
        mask: "0000 0000 0000 0000",
        cardType: "default",
      },
    ],
    dispatch: (appended, dynamicMasked) => {
      const number = (dynamicMasked.value + appended).replace(/\D/g, "");
      const foundMask = dynamicMasked.compiledMasks.find((mask) => {
        return number.match(mask.regex);
      });

      return foundMask;
    },
  };

  const schema = yup
    .object()
    .shape({
      number: yup.number().required(),
      owner: yup.string().required(),
      date: yup.string().required(),
      cvc: yup.number().moreThan(0).required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.success("Parabéns cartão adicionado!");
    }
  };

  return (
    <StyledAddPaymentMethod>
      <Container>
        <Panel>
        <Form onSubmit={(data) => handleSubmit(onSubmit(data))}>
            <figure>
              <img src="./logo.svg" alt="ícone rocketpay" />
            </figure>
            <div className="form-content">
              <div className="input-wrapper">
                <label htmlFor="card-number">Número do cartão</label>
                <IMaskInput
                  id="card-number"
                  onAccept={(value, maskedValue) =>
                    setNumber(value, maskedValue)
                  }
                  {...cardNumberProps}
                  {...register("number")}
                  placeholder="0000 0000 0000 0000"
                />
                {errors.number?.message && (
                  <span>{errors.number?.message}</span>
                )}
              </div>
              <div className="input-wrapper">
                <label htmlFor="owner">Nome do Titular</label>
                <IMaskInput
                  id="owner"
                  onAccept={(value) => setOwner(value.trim())}
                  placeholder="NOME COMPLETO"
                  {...ownerProps}
                  {...register("owner")}
                />
                {errors.owner?.message && <span>{errors.owner?.message}</span>}
              </div>
              <div className="flex">
                <div className="input-wrapper">
                  <label htmlFor="expiration-date">Expiração</label>
                  <IMaskInput
                    id="expiration-date"
                    onAccept={(value) => setExpirationDate(value)}
                    {...dateProps}
                    {...register("date")}
                    placeholder="02/32"
                  />
                  {errors.date?.message && <span>{errors.date?.message}</span>}
                </div>
                <div className="input-wrapper">
                  <label htmlFor="cvc">CVC</label>
                  <IMaskInput
                    id="cvc"
                    onAccept={(value) => setSecurityCode(value)}
                    {...cvcProps}
                    {...register("cvc")}
                    placeholder="123"
                  />
                  {errors.cvc?.message && <span>{errors.cvc?.message}</span>}
                </div>
              </div>
            </div>
            <Button type="submit">Adicione seu cartão</Button>
          </Form>
          <CardCredit>
            <div className="cc-logo">
              <figure>
                <img src={Icon} alt="icon" />
              </figure>
              <figure>
                <img src={Brand} alt="brand" />
              </figure>
            </div>
            <div className="cc-info">
              <span className="cc-number">
                {number.length === 0 ? "0000 0000 0000 0000" : number}
              </span>
              <div className="cc-holder">
                <span className="label">Nome do titular</span>
                <span className="value">
                  {owner.length === 0 ? "FULANO DE TAL" : owner}
                </span>
              </div>
              <div className="cc-extra">
                <div className="cc-expiration">
                  <span className="label">Expiração</span>
                  <span className="value">
                    {expirationDate.length === 0 ? "03/20" : expirationDate}
                  </span>
                </div>
                <div className="cc-security">
                  <span className="label">CVC</span>
                  <span className="value">
                    {securityCode.length === 0 ? "123" : securityCode}
                  </span>
                </div>
                <div className="cc-chip">
                  <figure className="cc-figure-chip">
                    <img className="cc-image-chip" src={Chip} alt="chip" />
                  </figure>
                </div>
              </div>
            </div>
          </CardCredit>
        </Panel>
      </Container>
    </StyledAddPaymentMethod>
  );
};
