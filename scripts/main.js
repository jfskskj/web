// 粒子背景配置
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.6,
            random: false,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false
            }
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.3,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.5,
            width: 1
        },
        move: {
            enable: true,
            speed: 4,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'window',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 150,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.8
                }
            }
        }
    },
    retina_detect: true
});

// 导航菜单切换
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// 滚动动画
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 页面切换逻辑
function switchSection(sectionId) {
    // 获取当前活动的section
    const currentSection = document.querySelector('.section.active');
    const targetSection = document.querySelector(sectionId);
    
    if (currentSection) {
        // 添加淡出动画
        currentSection.classList.add('fade-out');
        
        // 等待淡出动画完成
        setTimeout(() => {
            currentSection.classList.remove('active', 'fade-out');
            
            // 显示目标section
            targetSection.classList.add('active');
            
            // 更新导航栏状态
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`a[href="${sectionId}"]`).classList.add('active');
        }, 500); // 与CSS过渡时间相匹配
    } else {
        // 如果没有当前活动section，直接显示目标section
        targetSection.classList.add('active');
        document.querySelector(`a[href="${sectionId}"]`).classList.add('active');
    }
}

// 为导航链接添加点击事件
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href');
        switchSection(sectionId);
    });
});

// 观察新添加的元素
document.querySelectorAll('.team-member, .service-card').forEach(element => {
    observer.observe(element);
});

// 联系表单处理
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 这里可以添加表单提交逻辑
    alert('感谢您的留言，我们会尽快与您联系！');
    this.reset();
});

// 将联系表单元素添加到观察列表
document.querySelectorAll('.info-item, .contact-form').forEach(element => {
    observer.observe(element);
});

// 添加"加入我们"按钮点击事件
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('联系电话：18254262816');
}); 