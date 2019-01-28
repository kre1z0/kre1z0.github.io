import React, { Component } from "react";
import PropTypes from "prop-types";

import { VideoInMobileMockup } from "../VideoInMobileMockup/VideoInMobileMockup";
import bnMobileTestVideo from "../../../videos/mobileMsp/BN_mobile_3.mp4";
import { OutsideLink } from "../../../components/OutsideLink/OutsideLink";
import { Article, H2, H3, Paragraph, Section } from "../../LongreadAtoms/Longread";
import { UnorderedList } from "../../../components/LongreadAtoms/UnorderedList";
import { msp } from "../SectionWithIcon/SectionWithIcon";
import { Top1 } from "../Top1/Top1";

import styles, { BnBlock, WithVideoContent } from "./styles";

export class BnSection extends Component {
  static propTypes = {
    ratio: PropTypes.string,
  };

  render() {
    const { ratio } = this.props;

    return (
      <>
        <Section withoutPaddingBottom>
          <Article>
            <BnBlock>
              <img src={msp[ratio]} alt="bn logo" />
              <figure>
                <H2 small>Бизнес-навигатор МСП</H2>
                <Paragraph small>
                  В основе расчетов лежит гигантский массив данных: это опыт 5000 успешных компаний
                  малого бизнеса (а это 103 вида бизнеса) из 172 городов России, а также реальные
                  сведения о потреблении определенных товаров и услуг. Вся информация регулярно
                  обновляется.
                </Paragraph>
              </figure>
            </BnBlock>
            <Top1 ratio={ratio} />
            <Paragraph small>
              Приложение «Бизнес-навигатор МСП» в{" "}
              <OutsideLink href="http://2017.goldensite.ru/work/best-app-for-business-b2b/4459">
                конкурсе GoldenApp 2017
              </OutsideLink>{" "}
              получило первое место в категории «Лучшее приложение для бизнеса (b2b)». Этот помощник
              бизнесмена подскажет, как создать типовой бизнес-план.
            </Paragraph>
          </Article>
        </Section>
        <Section className={styles.bnWithVideoFirst}>
          <Article>
            <WithVideoContent>
              <H3>Минимум исходных данных</H3>
              <Paragraph small>
                Чтобы рассчитать в приложении примерный бизнес-план, достаточно выбрать вид бизнеса,
                место на карте и указать несколько дополнительных параметров:
              </Paragraph>
              <UnorderedList lightGreyBlue>
                <li>рыночную нишу,</li>
                <li>потребность в кредите,</li>
                <li>организационно-правовую форму будущего бизнеса,</li>
                <li>систему налогообложения.</li>
              </UnorderedList>
              <Paragraph small>
                Приложение оценит спрос и существующее предложение в выбранном месте.
                Предприниматель сможет увидеть на карте потенциальных конкурентов, а также сможет
                подобрать подходящее помещение в зависимости от масштаба бизнеса.
              </Paragraph>
              <Paragraph small>
                Понравившуюся недвижимость можно сохранить в избранное, дополнить фотографиями и
                комментариями.
              </Paragraph>
            </WithVideoContent>
            <VideoInMobileMockup ratio={ratio} video={bnMobileTestVideo} />
          </Article>
        </Section>
        <Section className={styles.bnWithVideoSecond}>
          <Article>
            <VideoInMobileMockup ratio={ratio} video={bnMobileTestVideo} />
            <WithVideoContent>
              <H3>Детальный бизнес-план</H3>
              <Paragraph small>
                Результатом работы, как и в веб-версии системы «Бизнес-навигатор МСП», станет
                типовой бизнес-план. Приложение само расчитает бизнес-план на основе индикаторов
                рынка и практики ведения бизнеса.
              </Paragraph>
              <Paragraph small>
                В один документ приложение соберет все характеристики бизнеса:
              </Paragraph>
              <UnorderedList lightGreyBlue>
                <li>срок окупаемости,</li>
                <li>объем вложений,</li>
                <li>примерные доходы,</li>
                <li>информацию о кредите (если он необходим),</li>
                <li>адрес бизнес-точки,</li>
                <li>сведения о потенциальных покупателях.</li>
              </UnorderedList>
              <Paragraph small>
                Приложение также предложит концепцию бизнеса: ассортимент, режим работы,
                бизнес-модель и ключевой фактор успеха.
              </Paragraph>
              <Paragraph small>
                Бизнес-план можно сохранить в личном кабинете, скачать в PDF и поделиться им. Такой
                бизнес-план принимают для рассмотрения заявок на кредит банки — партнеры Корпорации
                МСП.
              </Paragraph>
            </WithVideoContent>
          </Article>
        </Section>
      </>
    );
  }
}
