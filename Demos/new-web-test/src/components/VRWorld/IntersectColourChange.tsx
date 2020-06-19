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
          el.setAttribute(
            'animation',
            'property: scale; to: 1.5 1.5 1.5; dur: 400; easing: linear;'
          );
          el.setAttribute(
            'animation__2',
            'property: material.opacity; to: 0; dur: 100; easing: linear; delay: 300;'
          );
          el.setAttribute(
            'animation__3',
            'property: scale; to: 0 0 0; dur: 100; easing: linear; delay: 300;'
          );
          setIsMouseEnter(true);
        });

        el.addEventListener('mouseleave', function () {
          el.setAttribute('material', 'color', initialColor);
          setIsMouseEnter(false);
        });
      },
    });
    // eslint-disable-next-line
  }, []);

  return null;
};
