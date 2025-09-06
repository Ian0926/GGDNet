/* ===== 科技感交互效果 ===== */

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  initTechTheme();
  initAnimations();
  initSmoothScrolling();
  initHoverEffects();
  initScrollAnimations();
});

// 初始化科技主题功能
function initTechTheme() {
  console.log('🚀 GGDNet科技主题初始化...');
  
  // 添加加载完成类
  document.body.classList.add('theme-loaded');
  
  // 创建动态背景粒子（可选）
  createBackgroundParticles();
  
  // 初始化所有交互元素
  initInteractiveElements();
}

// 初始化动画系统
function initAnimations() {
  // 为所有需要动画的元素添加类
  const animatedElements = document.querySelectorAll('.tech-theme .hero, .tech-theme .card, .tech-theme .image-container figure');
  
  animatedElements.forEach((element, index) => {
    //  staggered animation
    element.style.animationDelay = `${index * 0.1}s`;
    element.classList.add('animate-fadeInUp');
  });
}

// 平滑滚动效果
function initSmoothScrolling() {
  // 为所有内部链接添加平滑滚动
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // 添加滚动动画
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // 添加焦点效果
        targetElement.classList.add('scroll-highlight');
        setTimeout(() => {
          targetElement.classList.remove('scroll-highlight');
        }, 2000);
      }
    });
  });
}

// 悬停效果增强
function initHoverEffects() {
  // 为所有可交互元素添加高级悬停效果
  const interactiveElements = document.querySelectorAll('.tech-theme .link-block a, .tech-theme .card, .tech-theme .image-container figure');
  
  interactiveElements.forEach(element => {
    // 鼠标进入效果
    element.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 212, 255, 0.6)';
      
      // 添加光晕效果
      this.style.setProperty('--glow-intensity', '0.6');
    });
    
    // 鼠标离开效果
    element.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
      this.style.setProperty('--glow-intensity', '0.3');
    });
    
    // 点击效果
    element.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });
  
  // 特殊文字悬停效果
  const textLinks = document.querySelectorAll('.tech-theme .publication-authors a');
  textLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.backgroundSize = '200% 200%';
      this.style.backgroundPosition = 'right center';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.backgroundSize = '';
      this.style.backgroundPosition = '';
    });
  });
}

// 滚动动画系统
function initScrollAnimations() {
  // 使用Intersection Observer实现滚动触发动画
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        
        // 为不同元素添加不同的动画延迟
        if (entry.target.classList.contains('staggered')) {
          const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
          entry.target.style.animationDelay = `${index * 0.2}s`;
        }
      }
    });
  }, observerOptions);
  
  // 观察所有需要滚动动画的元素
  const animatedElements = document.querySelectorAll('.reveal-on-scroll');
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  // 滚动进度指示器
  window.addEventListener('scroll', function() {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.documentElement.style.setProperty('--scroll-progress', scrollPercentage + '%');
  });
}

// 创建背景粒子效果（可选）
function createBackgroundParticles() {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'particles-container';
  particleContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  `;
  
  document.body.appendChild(particleContainer);
  
  // 创建粒子
  for (let i = 0; i < 30; i++) {
    createParticle(particleContainer);
  }
}

function createParticle(container) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  const size = Math.random() * 4 + 1;
  const colors = ['#00d4ff', '#667eea', '#ff2d95', '#00ff88'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  particle.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    background: ${color};
    border-radius: 50%;
    opacity: ${Math.random() * 0.6 + 0.2};
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    animation: floatParticle ${Math.random() * 20 + 10}s ease-in-out infinite;
    animation-delay: ${Math.random() * 5}s;
  `;
  
  // 添加动画关键帧
  const style = document.createElement('style');
  style.textContent = `
    @keyframes floatParticle {
      0%, 100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.3;
      }
      25% {
        transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.2);
        opacity: 0.8;
      }
      50% {
        transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0.8);
        opacity: 0.5;
      }
      75% {
        transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.1);
        opacity: 0.7;
      }
    }
  `;
  
  document.head.appendChild(style);
  container.appendChild(particle);
}

// 初始化所有交互元素
function initInteractiveElements() {
  // 复制按钮功能增强
  const copyButtons = document.querySelectorAll('.copy-button');
  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const bibtexContent = document.getElementById('bibtex-content').textContent;
      
      navigator.clipboard.writeText(bibtexContent).then(() => {
        // 添加成功动画
        this.innerHTML = '<i class="fas fa-check"></i> Copied!';
        this.style.background = 'linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)';
        
        setTimeout(() => {
          this.innerHTML = '<i class="fas fa-copy"></i> Copy';
          this.style.background = '';
        }, 2000);
      }).catch(err => {
        console.error('复制失败:', err);
      });
    });
  });
  
  // 图片灯箱效果
  const images = document.querySelectorAll('.tech-theme .image-container img');
  images.forEach(img => {
    img.addEventListener('click', function() {
      openLightbox(this.src, this.alt);
    });
    
    // 添加加载动画
    if (!img.complete) {
      img.style.opacity = '0';
      img.addEventListener('load', function() {
        this.style.opacity = '1';
        this.style.transition = 'opacity 0.5s ease-in';
      });
    }
  });
}

// 灯箱功能
function openLightbox(src, alt) {
  const lightbox = document.createElement('div');
  lightbox.className = 'tech-lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <img src="${src}" alt="${alt}">
      <div class="lightbox-caption">${alt}</div>
      <button class="lightbox-close">&times;</button>
    </div>
  `;
  
  lightbox.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 14, 23, 0.95);
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
  
  document.body.appendChild(lightbox);
  
  // 显示灯箱
  setTimeout(() => {
    lightbox.style.opacity = '1';
  }, 10);
  
  // 关闭功能
  const closeBtn = lightbox.querySelector('.lightbox-close');
  closeBtn.addEventListener('click', () => {
    lightbox.style.opacity = '0';
    setTimeout(() => {
      lightbox.remove();
    }, 300);
  });
  
  // 点击背景关闭
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.opacity = '0';
      setTimeout(() => {
        lightbox.remove();
      }, 300);
    }
  });
  
  // ESC键关闭
  document.addEventListener('keydown', function closeOnEsc(e) {
    if (e.key === 'Escape') {
      lightbox.style.opacity = '0';
      setTimeout(() => {
        lightbox.remove();
      }, 300);
      document.removeEventListener('keydown', closeOnEsc);
    }
  });
}

// 性能优化：懒加载图片
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// 添加CSS变量动态更新
function updateCSSVariables() {
  // 根据滚动位置更新变量
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollY / docHeight) * 100;
    
    document.documentElement.style.setProperty('--scroll-position', scrollY + 'px');
    document.documentElement.style.setProperty('--scroll-percent', scrollPercent + '%');
  });
  
  // 根据鼠标位置更新变量
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.documentElement.style.setProperty('--mouse-x', x);
    document.documentElement.style.setProperty('--mouse-y', y);
  });
}

// 初始化所有功能
function initAll() {
  initTechTheme();
  initLazyLoading();
  updateCSSVariables();
}

// 导出函数供全局使用
window.TechTheme = {
  init: initAll,
  openLightbox,
  createParticles: createBackgroundParticles
};

// 自动初始化
initAll();