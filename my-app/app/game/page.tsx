'use client'

import { useState, useEffect, useCallback } from 'react'
import styles from './page.module.css'

const GAME_WIDTH = 400
const GAME_HEIGHT = 600
const PLAYER_WIDTH = 50
const PLAYER_HEIGHT = 50
const OBJECT_SIZE = 20
const FALLING_SPEED = 4  // Fixed falling speed

type ObjectType = 'apple' | 'drug'

interface FallingObject {
    x: number
    y: number
    type: ObjectType
}

export default function CatcherGame() {
    const [playerPosition, setPlayerPosition] = useState(GAME_WIDTH / 2 - PLAYER_WIDTH / 2)
    const [objects, setObjects] = useState<FallingObject[]>([])
    const [score, setScore] = useState(0)
    const [lives, setLives] = useState(3)
    const [gameOver, setGameOver] = useState(false)

    const createObject = useCallback((): FallingObject => {
        return {
            x: Math.random() * (GAME_WIDTH - OBJECT_SIZE),
            y: 0,
            type: Math.random() < 0.7 ? 'apple' : 'drug'
        }
    }, [])

    const addNewObject = useCallback(() => {
        setObjects(prevObjects => [...prevObjects, createObject()])
    }, [createObject])

    useEffect(() => {
        const interval = setInterval(addNewObject, 1000) // Add a new object every 3 seconds
        return () => clearInterval(interval)
    }, [addNewObject])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                setPlayerPosition((prev) => Math.max(0, prev - 20))
            } else if (e.key === 'ArrowRight') {
                setPlayerPosition((prev) => Math.min(GAME_WIDTH - PLAYER_WIDTH, prev + 20))
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    useEffect(() => {
        if (gameOver) return

        const gameLoop = () => {
            setObjects(prevObjects => {
                return prevObjects.map((obj) => {
                    const newY = obj.y + FALLING_SPEED

                    // Check if object is out of bounds
                    if (newY > GAME_HEIGHT - OBJECT_SIZE) {
                        return null // Remove object
                    }

                    // Handle object caught by player
                    if (
                        newY + OBJECT_SIZE > GAME_HEIGHT - PLAYER_HEIGHT &&
                        obj.x < playerPosition + PLAYER_WIDTH &&
                        obj.x + OBJECT_SIZE > playerPosition
                    ) {
                        if (obj.type === 'drug') {
                            setLives(prevLives => {
                                const newLives = prevLives - 0.5
                                if (newLives === 0) {
                                    setGameOver(true)
                                }
                                return newLives
                            })
                        }

                        if (obj.type === 'apple') {
                            setScore(prevScore => prevScore + 0.5)
                        }

                        return null // Remove caught object
                    }

                    return { ...obj, y: newY } // Update y position
                }).filter(obj => obj !== null) as FallingObject[]
            })
        }

        const interval = setInterval(gameLoop, 16) // 60 FPS, roughly every 16ms

        return () => clearInterval(interval)
    }, [gameOver, playerPosition])

    const handleRestart = () => {
        setScore(0)
        setLives(3)
        setGameOver(false)
        setObjects([]) // Reset objects
    }

    return (
        <div className={styles.gameContainer}>
            <div className={styles.gameArea} style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}>
                {gameOver ? (
                    <div className={styles.gameOver}>
                        <h2>Game Over</h2>
                        <p>Your score: {score}</p>
                        <button onClick={handleRestart}>Restart</button>
                    </div>
                ) : (
                    <>
                        <div
                            className={styles.player}
                            style={{
                                width: PLAYER_WIDTH,
                                height: PLAYER_HEIGHT,
                                left: playerPosition,
                            }}
                        >
                            <img
                                src="/drunkperson.gif"  // Path to your catcher image in the public folder
                                alt="Player"
                                style={{
                                    width: '100%', // Ensure the image fits within the player width
                                    height: '100%', // Ensure the image fits within the player height
                                }}
                            />
                        </div>
                        {objects.map((obj, index) => (
                            <img
                                key={index}
                                src={obj.type === 'apple' ? '/applesprite.jpg' : '/drugsprite.png'}
                                alt={obj.type}
                                className={styles.object}
                                style={{
                                    width: OBJECT_SIZE,
                                    height: OBJECT_SIZE,
                                    left: obj.x,
                                    top: obj.y,
                                }}
                            />
                        ))}
                    </>
                )}
            </div>
            <div className={styles.stats}>
                <div className={styles.score}>Score: {score}</div>
                <div className={styles.lives}>Lives: {lives}</div>
            </div>
        </div>
    )
}
