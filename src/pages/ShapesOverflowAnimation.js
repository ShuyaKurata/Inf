
import React, { useEffect, useRef } from "react";


const ShapesScrollAnimation = () => {
    const canvasRef = useRef(null);
    const shapesRef = useRef([]);
    const scrollYRef = useRef(0);
    const lastScrollYRef = useRef(0);
    let count = 0;
    const baseLine = 700;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        class Shape {
            constructor(x, y, size, init_y) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.color = "black"; // 図形の色を黒に設定
                this.speed = Math.random() * 2 + 1; // 図形が移動する速度
                this.init_y = init_y;//綺麗な動きにするためにいるかも
            }

            draw() {

                const radius = this.size;
                const diameter = radius * 2;
                // 画面の高さを取得
                const screenHeight = window.innerHeight;

                // 長方形の高さは、画面下端から円のY座標までの距離
                const rectHeight = screenHeight - (this.y);

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();

                // 円の下を黒くする長方形を描く
                ctx.beginPath();
                ctx.rect(this.x - radius, this.y, diameter, rectHeight);
                ctx.fillStyle = 'black';
                ctx.fill();
            }

            update(scrollY, direction) {
                //スクロールについてくる動き
                // const y = lastScrollYRef.current - scrollY;
                // this.y += y;

                if (direction === "down") {
                    if (this.y + this.size >= 0) {
                        this.y -= this.speed; // 下にスクロールしたときは図形が上に移動}
                    }
                } else {
                    if (this.y < window.innerHeight + this.size + this.init_y - window.innerHeight) {
                        if (scrollY <= baseLine) {
                            this.y += this.speed; // 上にスクロールしたときは図形が下に移動
                        } else {
                            if (this.y + this.size >= 0) {
                                this.y -= this.speed;
                            }
                        }
                    }
                }

                this.draw();

            }

        }


        const createShapes = (count) => {
            const shapes = [];
            for (let i = 0; i < count; i++) {
                let size = Math.random() * 20 + 10;
                let x = Math.random() * canvas.width;
                let y = canvas.height + Math.random() * 200; // キャンバスの下に図形を配置
                shapes.push(new Shape(x, y, size, y));
            }
            shapesRef.current = shapesRef.current.concat(shapes);
        };

        const animate = () => {


            const scrollY = scrollYRef.current;
            const direction = scrollY > lastScrollYRef.current ? "down" : "up";

            // const direction = scrollY > baseLine ? "down" : "up";

            // 下にスクロールした場合にのみ新しい図形を生成
            if (direction === "down") {
                if (count <= 200) {
                    createShapes(3); // スクロールごとに図形を追加生成
                    count++;
                }

            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height); // キャンバスをクリアして描画を更新
            }

            shapesRef.current.forEach((shape) => shape.update(scrollY, direction));
            // lastScrollYRef.current = scrollYRef.current; // スクロールについてくる動き

            requestAnimationFrame(animate); // アニメーションを継続
        };

        const handleScroll = () => {
            lastScrollYRef.current = scrollYRef.current;//アニメーションよりに

            scrollYRef.current = window.scrollY;
        };

        animate(); // アニメーションを開始
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed", // 画面に固定する
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1, // 他の要素の後ろに表示する
                pointerEvents: "none", // ユーザーがキャンバスに対して操作できないようにする
            }}
        />
    );
};

export default ShapesScrollAnimation;
