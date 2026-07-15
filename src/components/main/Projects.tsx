interface Projects {
  sub: string;
  used_skills?: string[];
  desc: string[];
  imgSrc?: string[];
  url?: string;
}

const PROJECT_OBJ: Projects[] = [
  {
    sub: "Poketmon 카드 뒤집기",
    used_skills: ["HTML", "CSS", "JS"],
    desc: [
      "같은 그림의 카드를 찾아 맞추는 메모리 게임입니다. HTML, CSS, JavaScript만 사용해 구현했으며, 라이브러리 없이 DOM과 상태를 직접 관리했습니다.",
      "게임 시작 시 Fisher–Yates 방식의 셔플 로직을 적용해 카드 배치가 매번 달라지도록 구성했으며, 재시작 시 선택 상태와 완료된 카드 상태가 모두 초기화되도록 처리했습니다.",
    ],
    imgSrc: [""],
    url: "https://interclear94.github.io/memory_game/",
  },
];
// Vanilla JavaScript Memory Game

// 같은 그림의 카드를 찾아 맞추는 메모리 게임입니다. HTML, CSS, JavaScript만 사용해 구현했으며, 라이브러리 없이 DOM과 상태를 직접 관리했습니다.

// 카드 선택 상태를 첫 번째 카드와 두 번째 카드로 나누어 관리하고, 두 카드가 공개된 동안에는 추가 입력을 막아 연속 클릭으로 게임 상태가 꼬이는 문제를 방지했습니다. 카드가 일치하면 공개 상태를 유지하고, 일치하지 않으면 일정 시간 후 다시 뒤집히도록 구현했습니다.

// 게임 시작 시 Fisher–Yates 방식의 셔플 로직을 적용해 카드 배치가 매번 달라지도록 구성했으며, 재시작 시 선택 상태와 완료된 카드 상태가 모두 초기화되도록 처리했습니다.
const Projects = () => {
  return (
    <section className="w-full bg-main-gray flex flex-col justify-center items-center py-10 gap-10">
      <h2 className="flex justify-center text-title-gray text-3xl font-medium py-5">
        <span className="text-highlight-color">Projects</span>
      </h2>
      <div className="flex justify-center sm:w-[95%]"></div>
    </section>
  );
};

export default Projects;
