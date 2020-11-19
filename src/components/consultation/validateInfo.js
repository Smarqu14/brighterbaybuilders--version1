export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.number) {
    errors.number = "Number is required";
  } else if (values.number.length < 6) {
    errors.number = "Number needs to be 6 characters or more";
  }

  if (!values.message) {
    errors.message = "Message is required";
  }
  return errors;
}
