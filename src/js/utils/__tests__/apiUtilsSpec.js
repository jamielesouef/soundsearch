import { paramsToQueryString, apiBulder } from '../apiUtils';
import constants from '../../constants';

describe('apiUtils', () => {
  describe('paramsToQueryString', () => {
    describe('when converting a to a query string', () => {
      it('should return a query string with supplied params', () => {
        expect(paramsToQueryString({ foo: 'bar' }).indexOf('foo=bar')).not.toEqual(-1);

      });

      it('should include the default params', () => {
        expect(paramsToQueryString().indexOf(`client_id=${constants.CLIENT_ID}`)).not.toEqual(-1);
      });
    });
  });

  describe('apiBulder', () => {
    describe('when building the url', () => {
      let url;

      beforeEach(() => {
        url = apiBulder('http://foo.com', { bar: 'baz' });
      });

      it('should add the client id', () => {
        expect(url.indexOf(`client_id=${constants.CLIENT_ID}`)).not.toEqual(-1);
      });

      it('should add the params', () => {
        expect(url.indexOf('bar=baz')).not.toEqual(-1);
      });

      it('should add the url', () => {
        expect(url.indexOf('http://foo.com')).not.toEqual(-1);
      });
    });

  });
});

