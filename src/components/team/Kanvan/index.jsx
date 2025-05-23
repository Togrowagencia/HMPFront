import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
} from "react-beautiful-dnd";

const initialData = {
  columns: {
    column1: {
      id: 'column1',
      title: 'Oficina 1',
      candidateIds: ['candidate1', 'candidate2', 'candidate3'],
    },
    column2: {
      id: 'column2',
      title: 'Oficina 2',
      candidateIds: ['candidate4', 'candidate5'],
    },
    column3: {
      id: 'column3',
      title: 'Oficina 3',
      candidateIds: ['candidate6'],
    },
  },
  candidates: {
    candidate1: { id: 'candidate1', name: 'Juan', lastName: 'Pérez', company: 'ACME', services: 'Consultoría', attachments: 'Archivo 1', comments: 'Buen perfil' },
    candidate2: { id: 'candidate2', name: 'Ana', lastName: 'Martínez', company: 'BetaCorp', services: 'Desarrollo', attachments: 'Archivo 2', comments: 'Muy buena experiencia' },
    candidate3: { id: 'candidate3', name: 'Carlos', lastName: 'Gómez', company: 'GammaTech', services: 'Diseño', attachments: 'Archivo 3', comments: 'Falta mejorar habilidades técnicas' },
    candidate4: { id: 'candidate4', name: 'Luisa', lastName: 'Fernández', company: 'DeltaSystems', services: 'Gestión', attachments: 'Archivo 4', comments: 'Excelente comunicación' },
    candidate5: { id: 'candidate5', name: 'Pedro', lastName: 'López', company: 'Epsilon', services: 'Marketing', attachments: 'Archivo 5', comments: 'Muy creativo' },
    candidate6: { id: 'candidate6', name: 'Sofia', lastName: 'Ruiz', company: 'ZetaInc', services: 'Administración', attachments: 'Archivo 6', comments: 'Experiencia destacable' },
  },
  columnOrder: ['column1', 'column2', 'column3'],
};


const Kanvan = () => {
  const [data, setData] = useState(initialData);

  // Función para manejar el cambio de orden en las columnas y candidatos
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    // Si no se mueve a ningún lugar, no hacemos nada
    if (!destination) return;

    if (type === 'column') {
      // Reordenar columnas
      const newColumnOrder = Array.from(data.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setData((prevState) => ({
        ...prevState,
        columnOrder: newColumnOrder,
      }));
    } else {
      // Reordenar candidatos dentro de una columna
      const startColumn = data.columns[source.droppableId];
      const finishColumn = data.columns[destination.droppableId];

      if (startColumn === finishColumn) {
        const newCandidateIds = Array.from(startColumn.candidateIds);
        newCandidateIds.splice(source.index, 1);
        newCandidateIds.splice(destination.index, 0, draggableId);

        setData((prevState) => ({
          ...prevState,
          columns: {
            ...prevState.columns,
            [startColumn.id]: {
              ...startColumn,
              candidateIds: newCandidateIds,
            },
          },
        }));
      } else {
        // Mover candidato entre columnas
        const startCandidateIds = Array.from(startColumn.candidateIds);
        startCandidateIds.splice(source.index, 1);

        const finishCandidateIds = Array.from(finishColumn.candidateIds);
        finishCandidateIds.splice(destination.index, 0, draggableId);

        setData((prevState) => ({
          ...prevState,
          columns: {
            ...prevState.columns,
            [startColumn.id]: {
              ...startColumn,
              candidateIds: startCandidateIds,
            },
            [finishColumn.id]: {
              ...finishColumn,
              candidateIds: finishCandidateIds,
            },
          },
        }));
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div
            ref={provided.innerRef}
            style={{
              display: 'flex',
              marginTop: '20px',
              justifyContent: 'flex-start',
              overflowX: 'auto',
            }}
          >
            {data.columnOrder.map((columnId, index) => {
              const column = data.columns[columnId];
              const candidates = column.candidateIds.map((candidateId) => data.candidates[candidateId]);

              return (
                <Draggable key={column.id} draggableId={column.id} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} className="bg-white rounded-lg shadow-md w-[370px] min-h-[150px] flex flex-col justify-start items-start p-4 m-2 gap-4" {...provided.draggableProps} {...provided.dragHandleProps}>
                        <h3 className="inter-18 gris flex items-center gap-2">
                            <img src="/svg/team/office.svg" alt="" />
                            {column.title}
                        </h3>
                      <Droppable droppableId={column.id} type="task">
                        {(provided) => (
                          <div ref={provided.innerRef} className="w-full h-full flex flex-col gap-4">
                            {candidates.map((candidate, index) => (
                              <Draggable key={candidate.id} draggableId={candidate.id} index={index}>
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="bg-[#F9F9F9] rounded-[10px] px-[20px] py-[10px]"
                                  >
                                    <p><strong>{candidate.name} {candidate.lastName}</strong></p>
                                    <p>Empresa: {candidate.company}</p>
                                    <p>Servicios: {candidate.services}</p>
                                    <p>Adjuntos: {candidate.attachments}</p>
                                    <p>Comentarios: {candidate.comments}</p>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Kanvan;