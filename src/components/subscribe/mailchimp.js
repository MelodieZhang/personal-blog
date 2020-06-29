import React from "react"
import PropTypes from "prop-types"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Subscribe = ({ CustomForm }) => (
  <MailchimpSubscribe
    url="https://melodiezhang.us10.list-manage.com/subscribe/post?u=4fed45ee5092478a3ecdc063a&amp;id=391be5d253"
    render={({ subscribe, status, message }) => (
      <CustomForm
        status={status}
        message={message}
        onValidated={formData => subscribe(formData)}
      />
    )}
  />
)

Subscribe.propTypes = {
  group: PropTypes.number,
  CustomForm: PropTypes.elementType,
}

export default Subscribe
