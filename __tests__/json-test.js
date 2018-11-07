const fs = require('fs');

const carbonIconsJson = require('../dist/carbon-icons.json');

describe('carbon-icons.json', () => {
  carbonIconsJson.forEach(object => {
    describe(object.name, () => {
      it('should have an id', () => {
        expect(object.id).toBeDefined();
        expect(object.id).not.toBe('');
      });

      it('should have width greater than 0', () => {
        expect(object.width).not.toEqual('');
        expect(Number(object.width)).toBeGreaterThan(0);
      });

      it('should have height greater than 0', () => {
        expect(object.height).not.toEqual('');
        expect(Number(object.height)).toBeGreaterThan(0);
      });

      it('should have a name', () => {
        expect(object.name).not.toEqual('');
      });

      it('should have tags', () => {
        expect(object.tags).not.toEqual('');
      });

      it('should have empty styles', () => {
        expect(object.styles).toEqual('');
      });

      it('should have a viewBox', () => {
        expect(object.viewBox).not.toEqual('');
      });

      it('should have empty data for circles', () => {
        expect(object.svgData.circles).toEqual('');
      });

      it('should have empty data for polygons', () => {
        expect(object.svgData.polygons).toEqual('');
      });

      it('should have empty data for ellipses', () => {
        expect(object.svgData.ellipses).toEqual('');
      });

      it('should have empty data for polylines', () => {
        expect(object.svgData.polylines).toEqual('');
      });

      it('should have empty data for rects', () => {
        expect(object.svgData.rects).toEqual('');
      });

      it('each svgData object should have a path value', () => {
        expect(object.svgData.paths.length).toBeGreaterThan(0);
      });
    });
  });
});
