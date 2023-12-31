import swr from '../lib/swr';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import config from "../../config";
const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function withdeniz() {

    const { data: me } = swr("/api/v1/me");
    const _me = me ? me : null;

    function renderTime(dimension, time) {
        return (
            <div className="time-wrapper">
                <div className="time">{time}</div>
                <div>{dimension}</div>
            </div>
        );
    };


    const stratTime = Date.now() / 100; 
    const endTime = new Date(config.deniz).getTime() / 1000

    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;
    return (
        <div className="mt-20 mb-10">
            <div className="w-full h-full flex justify-center items-center">
                <div className="px-5 w-full h-full">
                    <div className="w-full h-full md:flex justify-center items-center">
                        <div className="mr-10 flex md:shrink-0 justify-center place-items-center">
                            <img
                                className={
                                    "rounded-full ring-[3px] ring-indigo  w-44 h-44 "
                                }
                                src={`https://cdn.discordapp.com/avatars/${_me?.data.discord_user.id}/${_me?.data.discord_user.avatar}.png`}
                            />
                            <div className="relative">
                            </div>
                        </div>
                        <div className="lg:mr-10 mt-8">
                            <div className="text-2xl font-bold text-center dark:text-white/50">
                                Frozexxn
                            </div>
                            <div className="text-2xl font-bold text-center dark:text-white/50">
                                ❤️
                            </div>
                            <div className="text-2xl font-bold text-center dark:text-white/50">
                                Deniz
                            </div>
                        </div>

                        <img
                            className={
                                "rounded-full ring-[3px] ring-indigo w-44 h-44 mx-44 md:mx-0 mt-4 md:mt-0"
                            }
                            src={`https://cdn.discordapp.com/avatars/852628541634773063/bd6094b51ddf3e68e79762261bb8910c.png?size=1024`}
                        />
                    </div>
                </div>
            </div>



            <div className="mt-3 w-full text-center">
                <p className="pl-3 text-4xl text-md mt-1 dark:text-white/50 ">
                    <span className="text-indigo">
                        Anniversary with Deniz
                    </span>
                </p>
                <div className="ml-3  -mt-3 text-center">
                    <div className="items-center justify-center">
                        <div className="mt-4">
                            <div className="">
                                <i className="fas fa-clock text-indigo  text-lg  mr-2" />
                                <span className="text-md text-center font-light dark:text-white/50">
                                   06.24.2023
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="countDown mt-32">
                <CountdownCircleTimer
                    {...timerProps}
                    colors="#7E2E84"
                    duration={daysDuration}
                    initialRemainingTime={remainingTime}
                >
                    {({ elapsedTime, color }) => (
                        <span style={{ color }}>
                            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
                        </span>
                    )}
                </CountdownCircleTimer>

                <CountdownCircleTimer
                    {...timerProps}
                    colors="#D14081"
                    duration={daySeconds}
                    initialRemainingTime={remainingTime % daySeconds}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                    })}
                >
                    {({ elapsedTime, color }) => (
                        <span style={{ color }}>
                            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
                        </span>
                    )}
                </CountdownCircleTimer>

                <CountdownCircleTimer
                    {...timerProps}
                    colors="#EF798A"
                    duration={hourSeconds}
                    initialRemainingTime={remainingTime % hourSeconds}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                    })}
                >
                    {({ elapsedTime, color }) => (
                        <span style={{ color }}>
                            {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
                        </span>
                    )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                    {...timerProps}
                    colors="#218380"
                    duration={minuteSeconds}
                    initialRemainingTime={remainingTime % minuteSeconds}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > 0
                    })}
                >
                    {({ elapsedTime, color }) => (
                        <span style={{ color }}>
                            {renderTime("seconds", getTimeSeconds(elapsedTime))}
                        </span>
                    )}
                </CountdownCircleTimer>
            </div>
        </div>
    );
}

