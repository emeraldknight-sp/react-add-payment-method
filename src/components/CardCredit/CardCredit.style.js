import styled from "styled-components";

export const StyledCardCredit = styled.section`
  display: none;
  background: no-repeat center/cover;
  background-image: url("/cc-bg.svg");
  /* width: 15rem;
  height: 11rem; */
  width: 22rem;
  height: 18rem;
  padding: 1.25rem;
  border-radius: 1rem;

  flex-direction: column;
  gap: 2.5rem;

  .cc-logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cc-info {
    display: grid;
    gap: 1.4rem;
  }

  .cc-number {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 2rem;
    letter-spacing: 0.04em;

    color: #e8e8e8;
    text-shadow: 0 0.12rem 0.32rem rgb(23 23 23 / 40%);
  }

  .cc-holder,
  .cc-expiration,
  .cc-security {
    display: grid;
    gap: 0.4rem;
  }

  .label {
    font-size: 0.625rem;
    line-height: 1.2rem;
  }

  .value {
    font-size: 0.875rem;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0 0.25rem 0.25rem rgb(22 22 22 / 16%);
    text-transform: uppercase;
  }

  .cc-extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cc,
  .cc-logo,
  .cc-number {
    position: relative;
  }

  .cc-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;
