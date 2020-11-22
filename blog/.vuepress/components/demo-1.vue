<template>
  <div class="demo-box">
    <div class="carousel">
      <div class="panels">
        <a class="active">0</a>
        <a>1</a>
        <a>2</a>
        <a>3</a>
        <a>4</a>
      </div>
      <ul class="pagination">
        <li class="active"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="arrows">
        <div class="arrow prev-arrow"></div>
        <div class="arrow next-arrow"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-1',
  mounted() {
    class Carousel {
      constructor(options) {
        const defaultOptions = {
          element: null,
          autoplay: true,
          interval: 3000,
        };
        this.options = Object.assign({}, defaultOptions, options);

        this.$root = this.options.element;
        this.$panelContainer = this.$root.querySelector('.panels');
        this.$$panels = this.$root.querySelectorAll('.panels > a');

        this.bindEvent();
        this.playCarousel();
      }

      bindEvent() {
        this.bindArrows();
        this.bindPagination();
        this.bindPanelContainer();
        this.bindRoot();
      }

      bindArrows() {
        this.$prev = this.$root.querySelector('.arrows .prev-arrow');
        this.$next = this.$root.querySelector('.arrows .next-arrow');

        this.$prev.addEventListener('click', () => {
          this.setCarousel(
            this.getCurrentIndex(),
            this.getPrevIndex(),
            'right'
          );
        });

        this.$next.addEventListener('click', () => {
          this.setCarousel(this.getCurrentIndex(), this.getNextIndex(), 'left');
        });
      }

      bindPagination() {
        this.$$paginates = this.$root.querySelectorAll('.pagination > li');

        this.$$paginates.forEach(($pagination) => {
          $pagination.addEventListener('click', (e) => {
            let toIndex = [...this.$$paginates].indexOf(e.target);
            let currentIndex = this.getCurrentIndex();
            if (currentIndex !== toIndex) {
              let direction = toIndex > currentIndex ? 'left' : 'right';
              this.setCarousel(currentIndex, toIndex, direction);
            }
          });
        });
      }

      bindPanelContainer() {
        this.$panelContainer.addEventListener(
          'transitionend',
          this.resetCarouselPanel.bind(this),
          false
        );
      }

      bindRoot() {
        if (!this.options.autoplay) return;
        this.$root.addEventListener('mouseenter', () => {
          this.pauseCarousel();
        });
        this.$root.addEventListener('mouseleave', () => {
          this.playCarousel();
        });
      }

      getCurrentIndex() {
        return [...this.$$paginates].indexOf(
          this.$root.querySelector('.pagination li.active')
        );
      }

      getPrevIndex() {
        return (
          (this.getCurrentIndex() - 1 + this.$$paginates.length) %
          this.$$paginates.length
        );
      }

      getNextIndex() {
        return (this.getCurrentIndex() + 1) % this.$$paginates.length;
      }

      setCarousel(fromIndex, toIndex, direction) {
        if (!this.isAnimate) {
          this.$from = this.$$panels[fromIndex];
          this.$to = this.$$panels[toIndex];
          this.direction = direction;
          this.setPagination(toIndex);
          this.setCarouselPanel();
        }
      }

      setCarouselPanel() {
        this.isAnimate = true;
        this.moveCarouselPanel();
      }

      moveCarouselPanel() {
        const type = this.direction === 'left' ? 'next' : 'prev';
        this.$to.classList.add(type);
        this.$panelContainer.classList.add(this.direction);
      }

      resetCarouselPanel() {
        this.$from.classList.remove('active');
        this.$to.classList.remove('next', 'prev');
        this.$to.classList.add('active');
        this.$panelContainer.setAttribute('class', 'panels');
        this.isAnimate = false;
      }

      pauseCarousel() {
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
      }

      setPagination(index) {
        this.$$paginates.forEach(($pagination) =>
          $pagination.classList.remove('active')
        );
        this.$$paginates[index].classList.add('active');
      }

      playCarousel() {
        if (this.options.autoplay && !this.timer) {
          this.timer = setInterval(() => {
            this.setCarousel(
              this.getCurrentIndex(),
              this.getNextIndex(),
              'left'
            );
          }, this.options.interval);
        }
      }
    }

    new Carousel({
      element: document.querySelector('.carousel'),
    });
  },
};
</script>

<style lang="scss">
.demo-box {
  max-width: 740px;
  margin: 10px auto;
  padding: 2rem;
  background: #eee;
  border-radius: 5px;

  a:hover {
    text-decoration: none !important;
  }
}

.carousel {
  position: relative;
  height: 180px;
  overflow: hidden;
  /* 为测试添加 */
  width: 90%;
  margin: 0 auto;
}

.carousel .panels {
  height: 100%;
}

.carousel .panels.left {
  transform: translateX(-100%);
  transition: all 0.6s;
}

.carousel .panels.right {
  transform: translateX(100%);
  transition: all 0.6s;
}

.carousel .panels > a {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #333333;
}

.carousel .panels > a.prev {
  transform: translateX(-100%);
}

.carousel .panels > a.next {
  transform: translateX(100%);
}

.carousel .panels > a.active {
  z-index: 1;
}

/*
      颜色也是为测试添加
  */

.carousel .panels > a:nth-child(1) {
  background-color: #3498db;
}

.carousel .panels > a:nth-child(2) {
  background-color: #8e44ad;
}

.carousel .panels > a:nth-child(3) {
  background-color: #ff6b81;
}

.carousel .panels > a:nth-child(4) {
  background-color: #7f8c8d;
}

.carousel .panels > a:nth-child(5) {
  background-color: #f97f51;
}

.carousel .arrow {
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  z-index: 100;
  border-radius: 50%;
  background: rgba(31, 45, 61, 0.11);
  transition: all 0.3s;
  opacity: 0;
  cursor: pointer;
}

.carousel:hover .arrow {
  opacity: 1;
}

.carousel .prev-arrow {
  left: 10px;
  transform: translate(-10px, -50%);
}

.carousel:hover .prev-arrow {
  transform: translate(0, -50%);
}

.carousel .next-arrow {
  right: 10px;
  transform: translate(10px, -50%);
}

.carousel:hover .next-arrow {
  transform: translate(0, -50%);
}

.carousel .arrow::before {
  content: '';
  display: block;
  width: 6px;
  height: 6px;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  transform: rotate(135deg);
}

.carousel .next-arrow::before {
  transform: rotate(-45deg);
}

.carousel .pagination {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  list-style: none;
  margin: 0;
  padding: 0;
  /*解决案例中切换到移动端出现换行*/
  white-space: nowrap;
}

.carousel .pagination > li {
  display: inline-block;
  padding: 5px 0;
  cursor: pointer;
}

.carousel .pagination > li::before {
  content: '';
  display: block;
  width: 1.5rem;
  height: 2px;
  border-radius: 2px;
  background: #c0c4cc;
}

.carousel .pagination > li.active::before {
  background: #fff;
}
</style>
