import {FunctionComponent, useEffect} from 'react';

export const EntityGenerator: FunctionComponent = () => {
  useEffect(() => {
    AFRAME.registerComponent('entity-generator', {
      schema: {
        mixin: {default: ''},
        num: {default: 100},
        spread: {default: 20},
      },

      init: function () {
        var data = this.data;

        // Create entities with supplied mixin.
        for (var i = 0; i < data.num; i++) {
          var entity = document.createElement('a-entity');
          entity.setAttribute('mixin', data.mixin);
          // Set random position with supplied spread.
          entity.setAttribute('position', {
            x: getSpread(data.spread),
            y: getSpread(data.spread),
            z: getSpread(data.spread),
          });
          this.el.appendChild(entity);
        }
      },
    });

    function getSpread(spread: number) {
      return Math.random() * spread - spread / 2;
    }
  }, []);

  return null;
};
