import { Button, Heading, Text } from '@nx-test-zog/ui';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

/* eslint-disable-next-line */
export interface IntroductionContentProps {}

const StyledIntroductionContent = styled.div`
  background: #2763a5;
  height: 100%;
  padding: 45px;
  .introduction-wrapper {
    display: grid;
    height: 100%;
    place-items: center;
    .content {
      max-width: 700px;
      .heading-wrapper {
        text-align: center;
        margin-bottom: 1rem;
      }
      .sub-heading-wrapper {
        text-align: center;
      }
      .btn-wrapper {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
      }
    }
  }
`;

export function IntroductionContent(props: IntroductionContentProps) {
  return (
    <StyledIntroductionContent>
      <Text color="primary" fontWeight="bold" fontSize={18}>
        Envelop
      </Text>
      <div className="introduction-wrapper">
        <div className="content">
          <div className="heading-wrapper">
            <Heading color="primary">
              Introducing our <br />
              2020 report
            </Heading>
          </div>
          <div className="sub-heading-wrapper">
            <Text color="secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed do euismod tempor incididun.
            </Text>
          </div>
          <div className="btn-wrapper">
            <Button
              variant="outlined"
              size="medium"
              icon={<FaExternalLinkAlt />}
            >
              View Report
            </Button>
          </div>
        </div>
      </div>
    </StyledIntroductionContent>
  );
}

export default IntroductionContent;
