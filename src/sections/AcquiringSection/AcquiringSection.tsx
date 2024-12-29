import React from 'react';
import styles from './AcquiringSection.module.scss';
import Image from 'next/image';

const DATA = [
  {
    text: '1. Клиент желает совершить обмен с вами с фиата (карта, кошелек) в стороннюю систему или криптовалюту. Он создает заявку-ордер у вас на сайте или через биржу',
  },
  {
    text: '2. Вы (обменник или трейдер) обращаетесь к firekassa (через апи или интерфейс) и запрашиваете реквизит (карту/кошелек/ссылку-инвойс) на оплату. Тем самым создаете инвойс в системе.',
  },
  {
    text: '3. Вы передаете клиенту реквизит.',
  },
  {
    text: '4. Клиент совершает оплату по данному инвойсу.',
  },
  {
    text: '5. Ваш инвойс успешно переходит в статус оплачено и баланс Вашего сайта растет.',
  },
  {
    text: '6. Вы инициируете клиенту выплату по его заявке (или разморозку криптовалюты по сделке).',
  },
];

export default function AcquiringSection() {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>
        СХЕМА ЭКВАЙРИНГА
        <Image
          src={'/images/about/orange_light_line.png'}
          alt='line'
          width={203}
          height={17}
          className={styles.line}
        />
      </h2>

      <div className={styles.content}></div>
      <div className={styles.payform}>
        <div className={styles.leftSide}>
          <div className={styles.titleBlock}>
            ФОРМА ОПЛАТЫ
          </div>
          <div>

          </div>
        </div>
        <div className={styles.rightSide}></div>
      </div>
    </section>
  );
}