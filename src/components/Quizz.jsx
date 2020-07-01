import React, { useState } from 'react';
import styled from 'styled-components';
import Btn from './Button';
import { TitleH2, Flex, Punctuation } from '../mainStyle';
import Persos from './img/persos_quizz.svg';

const ZoneContainer = styled(Flex)`
  width: 80%;
  margin: auto;
`;

const QuizzContainer = styled(Flex)`
  text-align: left;
  margin-left: 3rem;
  width: 40%;
`;

const Label = styled.label`
  margin-bottom: 1rem;

  .persona-selection {
    border: none;
    background: none;
    border-bottom: 2px solid ${(props) => props.theme.orange};
    outline: 0;
    padding-bottom: 0.2rem;
    color: ${(props) => props.theme.orange};
  }
`;

const QuoteQuizz = styled.p`
  font-size: 1.5em;
  margin-bottom: 0;
`;

const ContentQuizz = styled.p`
  margin-top: 0.3em;
  width: 70%;
`;

const QuizzIllustration = styled.img`
  height: 400px;
  margin-top: 2rem;
  margin-right: 4rem;
`;

export default function Questionaire() {
  const [YouAre, setYouAre] = useState();
  const [YouWant, setYouWant] = useState();

  const handleChange = (event) => {
    setYouAre(event.target.value);
  };

  const handleChangeManager = (event) => {
    setYouWant(event.target.value);
  };

  return (
    <ZoneContainer btw>
      <QuizzContainer col>
        <TitleH2 quizz>
          Comment pouvons-nous vous aider <Punctuation>?</Punctuation>
        </TitleH2>
        <p>
          Pour vous présenter l&apos;offre Forope adaptée à vos besoins, on a
          besoin d&apos;en savoir un tout petit peu plus !
        </p>
        <Label htmlFor="persona-selection">
          Vous êtes :
          <select
            type="select"
            name="personas"
            id="persona-selection"
            className="persona-selection"
            onChange={handleChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="dirigeant">Dirigeant</option>
            <option value="rh">RH/Formation</option>
            <option value="operations">Opérations</option>
            <option value="particulier">Particulier</option>
          </select>
        </Label>

        {YouAre === 'dirigeant' && (
          <>
            <Label htmlFor="secondchoice">
              Vous voulez :
              <select
                name="personas"
                id="secondchoice"
                className="persona-selection"
                onChange={handleChangeManager}
              >
                <option value="">--Please choose an option--</option>
                <option value="excellence-opérationelle">
                  Excellence opérationelle
                </option>
              </select>
            </Label>
          </>
        )}

        {YouAre === 'rh' && (
          <>
            <Label htmlFor="secondchoice">
              Vous voulez :
              <select
                name="personas"
                id="persona-selection"
                className="persona-selection"
                onChange={handleChangeManager}
              >
                <option value="">--Please choose an option--</option>
                <option value="gpec">
                  GPEC / Transférer les savoir-faire au sein des équipes
                </option>
                <option value="excellence-oppérationnelle">
                  Excellence oppérationnelle
                </option>
                <option value="parcours-integration">
                  Constuire un parcours d&apos;intégration efficace
                </option>
                <option value="competences-management">
                  Développer les compétences en management
                </option>
                <option value="nouveaux-metiers">
                  Former aux nouveaux métiers
                </option>
              </select>
            </Label>
          </>
        )}

        {YouAre === 'operations' && (
          <>
            <Label htmlFor="secondchoice">
              Vous voulez :
              <select
                name="personas"
                id="persona-selection"
                className="persona-selection"
                onChange={handleChangeManager}
              >
                <option value="">--Please choose an option--</option>
                <option value="former-experts">
                  Former mes experts à transferer leur savoir-faire
                </option>
                <option value="bonnes-pratiques">
                  S&apos;assurer qu&apos;un nouveau salairé adopte les pratiques
                  de l&apos;entreprises
                </option>
                <option value="besoin-formation">
                  Besoin de formation sur des fondamentaux du métier
                </option>
                <option value="competences-management">
                  Développer les compétences en management
                </option>
                <option value="habilitations">Habilitations</option>
              </select>
            </Label>
          </>
        )}

        {YouAre === 'particulier' && (
          <>
            <Label htmlFor="secondchoice">
              Vous voulez :
              <select
                name="personas"
                id="persona-selection"
                className="persona-selection"
                onChange={handleChangeManager}
              >
                <option value="">--Please choose an option--</option>
                <option value="formation-cpf">Formation CPF</option>
              </select>
            </Label>
          </>
        )}

        {YouWant && (
          <div>
            <QuoteQuizz>Super, nous pouvons vous aider !</QuoteQuizz>
            <ContentQuizz>
              Viens découvrir tout ce qu’on faire, on est des super champions de
              la formation de formateurs.
            </ContentQuizz>
            <Btn quizz seeMore="Découvrir" link="/page2" />
          </div>
        )}
      </QuizzContainer>

      <QuizzIllustration src={Persos} alt="illustration du sujet" />
    </ZoneContainer>
  );
}
