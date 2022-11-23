
// I noticed that the API is not open to public usage. It is also a case to get 403 for such a post request
function postResultCheck(urlPath, statusCode, subjectKey) {
  cy.request({
    method: 'POST',
    url: urlPath,
    failOnStatusCode: false,
    body: {
        "data":"https://www.qrcode-monkey.com",
        "config":{
        "body":"circle",
        "logo":"#facebook"
        },
        "size":300,
        "download":false,
        "file":"svg"
        },
  }).then((response) => {
    expect(response.status).to.equal(statusCode);
  });
}

describe('Prevent Non-paid API Access', () => {
  it('Verify 403 - Forbidden', () => {
      postResultCheck('https://www.qrcode-monkey.com/qr/custom', 403);
  });
});