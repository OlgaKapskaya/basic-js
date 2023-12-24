/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const lastEmailNameIndex = email.lastIndexOf("@");
  if (lastEmailNameIndex !== -1) {
    const domain = email.slice(lastEmailNameIndex + 1);
    return (domain[0] !== '.') ? domain : domain.slice(1)
  } else {
    return ''
  }
}

module.exports = {
  getEmailDomain
};
