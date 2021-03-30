import React from 'react';
import appConfig from '../config';

const ButtonDonate = ({ className = 'button', label = 'Donate', ...otherProps }) => {
  return (
    <form
      aria-live="polite"
      data-ux="Form"
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
    >
      <input type="hidden" name="edit_selector" data-aid="EDIT_PANEL_EDIT_PAYMENT_ICON" />
      <input type="hidden" name="business" value="hockessincoloredschool107@gmail.com" />
      <input type="hidden" name="cmd" value="_donations" />
      <input type="hidden" name="item_name" value="Hockessincoloredschool107" />
      <input type="hidden" name="item_number" />
      <input type="hidden" name="amount" value="0.00" data-aid="PAYMENT_HIDDEN_AMOUNT" />
      <input type="hidden" name="shipping" value="0.00" />
      <input type="hidden" name="currency_code" value="USD" data-aid="PAYMENT_HIDDEN_CURRENCY" />
      <input type="hidden" name="rm" value="0" />
      <input type="hidden" name="return" value="http://hockessincoloredschool107.org/" />
      <input type="hidden" name="cancel_return" value="http://hockessincoloredschool107.org/" />
      <input type="hidden" name="cbt" value="Return to Hockessincoloredschool107" />
      <button
        data-ux-btn="spotlight"
        data-ux="ButtonSpotlight"
        name="submit"
        data-aid="PAYMENT_PAYPALBUTTON_RENDERED"
        icon="[object Object]"
        data-typography="ButtonAlpha"
        className={className}
        data-tccl="ux2.PAYMENT.payment3.Form.Default.Button.Spotlight.25668.click,click"
      >
        {label}
      </button>
    </form>
  );
};

export default ButtonDonate;
