import { Button } from "../../components/Button";
import { CardCredit } from "../../components/CardCredit/CardCredit";
import { Container } from "../../components/Container/Container";
import { Form } from "../../components/Form";
import { Panel } from "../../components/Panel";
import { StyledAddPaymentMethod } from "./AddPaymentMethod.style";

export const AddPaymentMethod = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <StyledAddPaymentMethod>
      <Container>
        <Panel>
          <Form onSubmit={handleSubmit}>
            <figure>
              <img src="./logo.svg" alt="ícone rocketpay" />
            </figure>
            <div className="form-content">
              <div className="input-wrapper">
                <label htmlFor="cc-number">NÚMERO DO CARTÃO</label>
                <input type="text" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="cc-owner">NOME DO TITULAR</label>
                <input type="text" />
              </div>
              <div className="flex">
                <div className="input-wrapper">
                  <label htmlFor="cc-expiration">EXPIRAÇÃO</label>
                  <input type="text" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="cc-code">CVC</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <Button>ADICIONAR CARTÃO</Button>
          </Form>
          <CardCredit>
            <div>
              <span>aproximação</span>
              <span>bandeira</span>
            </div>
            <span>numero do cartão</span>
            <div>
              <span>nome do titular</span>
              <span>nome</span>
            </div>
            <div>
              <div>
                <span>expiração</span>
                <span>03/20</span>
              </div>
              <div>
                <span>cvc</span>
                <span>230</span>
              </div>
              <div>
                <figure>
                  <img src="" alt="" />
                </figure>
              </div>
            </div>
          </CardCredit>
        </Panel>
      </Container>
    </StyledAddPaymentMethod>
  );
};
