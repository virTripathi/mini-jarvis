export default function CloseMicrophoneIcon({ className, onClick, color }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 16 16"
            fill="none"
            className={className}
            onClick={onClick}
        >
            <path
                d="M16 16H13L10.8748 13.3843C10.2884 13.6488 9.65899 13.8349 9 13.9291V16H7V13.9291C3.60771 13.4439 1 10.5265 1 7V6H3V7C3 9.76142 5.23858 12 8 12C8.54134 12 9.06258 11.914 9.55081 11.7548L8.12299 9.99753C8.0822 9.99917 8.0412 10 8 10C6.34315 10 5 8.65685 5 7V6.15385L0 0H3L16 16Z"
                fill={color??"#000000"}
            />
            <path
                d="M11 6.15385L6.38367 0.472212C6.85016 0.173309 7.40484 0 8 0C9.65685 0 11 1.34315 11 3V6.15385Z"
                fill={color??"#000000"}
            />
            <path
                d="M12.8076 8.37853L14.2506 10.1546C14.7299 9.20663 15 8.13485 15 7V6H13V7C13 7.47815 12.9329 7.94063 12.8076 8.37853Z"
                fill={color??"#000000"}
            />
        </svg>
    );
}