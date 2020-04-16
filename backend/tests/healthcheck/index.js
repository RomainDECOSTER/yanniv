const p = require('../../package.json');
// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Heathcheck', () => {
  it('should be ok with no version', done => {
    chai
      .request(app)
      .get('/healthcheck')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
  it(`should be ok with ${p.version} version`, done => {
    chai
      .request(app)
      .get(`/v${p.version}/healthcheck`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
