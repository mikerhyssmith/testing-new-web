import {FunctionComponent, useEffect, useState} from 'react';

export const IntersectColourChange: FunctionComponent = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  useEffect(() => {
    AFRAME.registerComponent('intersect-color-change', {
      init: function () {
        var el = this.el;
        var material = el.getAttribute('material');
        var initialColor = material.color;

        el.addEventListener('mousedown', function (evt) {
          el.setAttribute('material', 'color', '#EF2D5E');
        });

        el.addEventListener('mouseup', function (evt) {
          el.setAttribute('material', 'color', isMouseEnter ? '#24CAFF' : initialColor);
        });

        el.addEventListener('mouseenter', function () {
          el.setAttribute('material', 'color', '#24CAFF');
          setIsMouseEnter(true);
        });

        el.addEventListener('mouseleave', function () {
          el.setAttribute('material', 'color', initialColor);
          setIsMouseEnter(false);
        });
      },
    });
  }, [isMouseEnter]);

  return null;
};
